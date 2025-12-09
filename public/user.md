# User System API Documentation

## Overview

The User System API manages registration, authentication, email verification, KYC/age verification, profiles, passwords, and referral features. It supports secure OTP-based flows, wallet summaries, and user levels/XP.

---

## User System Architecture

### Key Features

1. **Registration & KYC**

   - Multipart registration with government ID and selfie
   - Validates schema and prevents duplicates
   - Creates wallets via DB triggers
   - Generates referral code automatically
   - Sends email verification OTP

2. **Authentication**

   - Login with email/password
   - Requires verified email to proceed
   - Returns JWT and wallet balances

3. **Email Verification**

   - OTP-based verification (6-digit code)
   - Resend OTP routes for public and authenticated users

4. **Profiles & Passwords**

   - Get and update profile details
   - Change password securely
   - Password reset via OTP (request/confirm)

5. **Age/KYC Status**

   - Age verification endpoint
   - KYC status retrieval (submitted, verified, rejection reason)

6. **Referral System**
   - Generate custom or auto referral code
   - Referral stats and rewards claim

---

## API Endpoints

### Authentication & Verification

#### `POST /api/users/register`

- **Description**: Register a new user with KYC documents
- **Authentication**: Public
- **Content-Type**: `multipart/form-data`
- **Required Files**: `governmentId` (file), `selfiePhoto` (file)
- **Required Fields**: `email`, `username`, `password`, `firstName`, `lastName`, `phone`, `dateOfBirth`, `country`, `governmentIdType`, `governmentIdNumber`
- **Optional Fields**: `referralCode`
- **Response**: Created user summary + verification email status

#### `POST /api/users/login`

- **Description**: Login with email/password; requires verified email
- **Authentication**: Public
- **Request Body**:

```json
{
  "email": "user@example.com",
  "password": "YourStrongPassword123!"
}
```

- **Response**: JWT token, user info, wallet balances

#### `POST /api/users/verify-email/send`

- **Description**: Send verification OTP to user's email
- **Authentication**: Public
- **Request Body**:

```json
{
  "email": "user@example.com"
}
```

- **Response**: Success message on email dispatch

#### `POST /api/users/verify-email/confirm`

- **Description**: Confirm email using OTP token
- **Authentication**: Public
- **Request Body**:

```json
{
  "token": "123456"
}
```

- **Response**: Email marked verified; tokens invalidated

#### `POST /api/users/verify-email/resend`

- **Description**: Resend verification OTP (authenticated variant)
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "email": "user@example.com"
}
```

- **Response**: Success message

### Password Management

#### `POST /api/users/password-reset/request`

- **Description**: Send password reset OTP to email
- **Authentication**: Public
- **Request Body**:

```json
{
  "email": "user@example.com"
}
```

- **Response**: Generic success message

#### `POST /api/users/password-reset/confirm`

- **Description**: Confirm reset using OTP and set new password
- **Authentication**: Public
- **Request Body**:

```json
{
  "token": "123456",
  "newPassword": "NewStrongPassword123!"
}
```

- **Response**: Password changed

#### `PUT /api/users/password`

- **Description**: Change password for authenticated user
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "currentPassword": "OldPassword123!",
  "newPassword": "NewStrongPassword123!"
}
```

- **Response**: Success message

### Profile

#### `GET /api/users/profile`

- **Description**: Get authenticated user's profile, wallets, and level info
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Response**: User object, wallet balances, current level metadata

#### `PUT /api/users/profile`

- **Description**: Update profile fields (username, profile_photo URL, phone)
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "username": "NewUsername",
  "profile_photo": "https://cdn.example.com/avatars/new.jpg",
  "phone": "+1234567890"
}
```

- **Response**: Updated user

### KYC & Age

#### `GET /api/users/kyc-status`

- **Description**: Get KYC status for authenticated user
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Response**:

```json
{
  "success": true,
  "data": {
    "kycStatus": "pending|verified|rejected",
    "submittedAt": "2025-12-01T10:00:00Z",
    "verifiedAt": null,
    "rejectionReason": null
  }
}
```

#### `POST /api/users/verify-age`

- **Description**: Mark age as verified
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Response**: Success message

### Referral System

#### `POST /api/users/referral/generate`

- **Description**: Generate or set a referral code
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "customCode": "MYCODE1234" // optional
}
```

- **Response**: Generated/accepted referral code

#### `GET /api/users/referral/stats`

- **Description**: Get referral stats and balances
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Response**: Code, totals, tier, history count

#### `POST /api/users/rewards/claim`

- **Description**: Claim a referral reward by ID
- **Authentication**: Required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "rewardId": "uuid-string"
}
```

- **Response**: Wallet updates or tickets based on reward type

### Admin

#### `POST /api/users/admin/create`

- **Description**: Admin creates a user account
- **Authentication**: Admin required
- **Headers**: `Authorization: Bearer <JWT>`
- **Request Body**:

```json
{
  "email": "newuser@example.com",
  "username": "newuser",
  "password": "StrongPassword123!",
  "phone": "+1234567890",
  "role": "USER"
}
```

- **Response**: Created user

#### `POST /api/users/admin/levels/initialize`

- **Description**: Seed user levels and perks
- **Authentication**: Admin required
- **Headers**: `Authorization: Bearer <JWT>`
- **Response**: Levels created/updated

---

## Error Handling

Consistent error format:

```json
{
  "success": false,
  "message": "Error description",
  "timestamp": "2025-12-05T12:00:00Z"
}
```

Common cases:

- Validation errors (schema)
- User not found
- Email already verified
- Invalid or expired token
- Permission denied
- Rate limit exceeded

---

## Notes

- Verification and reset tokens are 6-digit OTPs, expiring in 15 minutes.
- Referral codes are unique and may auto-generate from username.
- Wallet balances include `CASH` and `CREDIT` types.
- Email must be verified before login succeeds.
