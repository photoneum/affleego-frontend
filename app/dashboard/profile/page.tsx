"use client";

import { useRef, useState } from "react";

import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Edit3,
  Globe,
  Mail,
  MapPin,
  Phone,
  Save,
  Sparkles,
  Upload,
  User,
  X,
} from "lucide-react";

import DashboardPageHeader from "@/components/dashboard-page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { useUpdateProfile } from "@/hooks/mutations/useUpdateProfile";
import { useUserProfileData } from "@/hooks/queries/useUserProfileData";

import { getInitials } from "@/lib/utils/avatar";

import { UpdateProfileRequest } from "@/services/updateProfile";

export default function ProfilePage() {
  const { data: profileData, isLoading, error } = useUserProfileData();
  const updateProfileMutation = useUpdateProfile();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UpdateProfileRequest>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const userProfile = profileData?.data;

  // Handle form data updates
  const handleInputChange = (
    field: keyof UpdateProfileRequest,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle file selection with validation
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Validate file size (3MB max)
    const maxSize = 3 * 1024 * 1024; // 3MB in bytes
    if (file.size > maxSize) {
      setFileError("File size must be less than 3MB");
      setSelectedFile(null);
      return;
    }

    // Validate file type (images only)
    if (!file.type.startsWith("image/")) {
      setFileError("Please select an image file");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  // Handle edit mode toggle
  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset form data
      setFormData({});
      setSelectedFile(null);
      setFileError("");
    } else {
      // Start editing - populate form with current data
      setFormData({
        first_name: userProfile?.first_name || "",
        last_name: userProfile?.last_name || "",
        phone_number: userProfile?.phone_number || "",
        country: userProfile?.country || "",
      });
    }
    setIsEditing(!isEditing);
  };

  // Handle form submission
  const handleSaveChanges = async () => {
    const updateData: UpdateProfileRequest = {
      ...formData,
      ...(selectedFile && { image: selectedFile }),
    };

    // Only include fields that have actual values
    Object.keys(updateData).forEach((key) => {
      const value = updateData[key as keyof UpdateProfileRequest];
      if (value === "" || value === null || value === undefined) {
        delete updateData[key as keyof UpdateProfileRequest];
      }
    });

    try {
      await updateProfileMutation.mutateAsync(updateData);
      setIsEditing(false);
      setFormData({});
      setSelectedFile(null);
      setFileError("");
    } catch (error) {
      // Error is handled by the mutation hook
      console.error("Profile update failed:", error);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-6 px-8">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="mb-2 h-8 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Skeleton className="size-32 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !userProfile) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="mb-4 text-destructive">
              <User size={48} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Failed to load profile
            </h3>
            <p className="mb-4 text-muted-foreground">
              We couldn&apos;t load your profile information. Please try again.
            </p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6 px-8">
      {/* Header */}
      <div className="text-white">
        <DashboardPageHeader
          type="page-header"
          title="Profile Settings"
          description="Manage your personal information and account preferences"
        />
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        {isEditing ? (
          <div className="flex gap-2">
            <Button
              onClick={handleEditToggle}
              variant="destructive"
              disabled={updateProfileMutation.isPending}
            >
              <X className="mr-2 size-4" />
              Cancel
            </Button>
            <Button
              onClick={handleSaveChanges}
              disabled={updateProfileMutation.isPending}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {updateProfileMutation.isPending ? (
                <>
                  <div className="mr-2 size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 size-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleEditToggle}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
          >
            <Edit3 className="mr-2 size-4" />
            Edit Profile
          </Button>
        )}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Picture & Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="relative overflow-hidden">
            {/* Surprise element - animated background gradient */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

            <CardContent className="relative pt-6">
              <div className="flex flex-col items-center space-y-4">
                {/* Avatar Section */}
                <div className="group relative">
                  <Avatar className="size-32 border-4 border-white shadow-xl">
                    <AvatarImage
                      src={userProfile.image_url}
                      alt={`${userProfile.first_name} ${userProfile.last_name}`}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                      {getInitials(
                        userProfile.first_name,
                        userProfile.last_name,
                      )}
                    </AvatarFallback>
                  </Avatar>

                  {isEditing && (
                    <Button
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-2 -right-2 size-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Camera className="size-4" />
                    </Button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* File Upload Feedback */}
                {selectedFile && (
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                      <Upload className="mr-1 size-3" />
                      {selectedFile.name}
                    </Badge>
                  </div>
                )}

                {fileError && (
                  <div className="text-center">
                    <Badge variant="destructive" className="text-xs">
                      {fileError}
                    </Badge>
                  </div>
                )}

                {/* Name & Status */}
                <div className="space-y-2 text-center">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    {userProfile.first_name} {userProfile.last_name}
                    {userProfile.is_verified && (
                      <Sparkles className="size-5 text-blue-500" />
                    )}
                  </h2>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="size-4" />
                    {userProfile.email}
                  </p>
                  {userProfile.is_verified ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Verified Account
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Unverified Account</Badge>
                  )}
                </div>

                <Separator />

                {/* Account Info */}
                <div className="w-full space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Calendar className="size-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Member Since</p>
                      <p className="text-muted-foreground">
                        {formatDate(userProfile.date_joined)}
                      </p>
                    </div>
                  </div>

                  {userProfile.last_login && (
                    <div className="flex items-center gap-3">
                      <Globe className="size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Last Login</p>
                        <p className="text-muted-foreground">
                          {formatDate(userProfile.last_login)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  {isEditing ? (
                    <Input
                      id="first_name"
                      value={formData.first_name || ""}
                      onChange={(e) =>
                        handleInputChange("first_name", e.target.value)
                      }
                      placeholder="Enter your first name"
                    />
                  ) : (
                    <div className="rounded-md bg-muted/50 p-3">
                      {userProfile.first_name || "Not provided"}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  {isEditing ? (
                    <Input
                      id="last_name"
                      value={formData.last_name || ""}
                      onChange={(e) =>
                        handleInputChange("last_name", e.target.value)
                      }
                      placeholder="Enter your last name"
                    />
                  ) : (
                    <div className="rounded-md bg-muted/50 p-3">
                      {userProfile.last_name || "Not provided"}
                    </div>
                  )}
                </div>
              </div>

              {/* Email (Read-only) */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="rounded-md bg-muted/30 p-3 text-muted-foreground">
                  {userProfile.email}
                  <span className="ml-2 text-xs">(Cannot be changed)</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone_number"
                  className="flex items-center gap-2"
                >
                  <Phone className="size-4" />
                  Phone Number
                </Label>
                {isEditing ? (
                  <Input
                    id="phone_number"
                    value={formData.phone_number || ""}
                    onChange={(e) =>
                      handleInputChange("phone_number", e.target.value)
                    }
                    placeholder="Enter your phone number"
                    type="tel"
                  />
                ) : (
                  <div className="rounded-md bg-muted/50 p-3">
                    {userProfile.phone_number || "Not provided"}
                  </div>
                )}
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  Country
                </Label>
                {isEditing ? (
                  <Input
                    id="country"
                    value={formData.country || ""}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    placeholder="Enter your country"
                  />
                ) : (
                  <div className="rounded-md bg-muted/50 p-3">
                    {userProfile.country || "Not provided"}
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <Separator />

              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div>
                  <Label className="text-muted-foreground">Account Type</Label>
                  <p className="p-2 capitalize">
                    {userProfile.type === "user" ? "Affliate" : "Standard"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
