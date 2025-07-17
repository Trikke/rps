# Battle Arena

A real-time battle simulation game built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Deployment to Firebase Hosting

### Prerequisites

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard
   - Note your project ID

### Setup Firebase

1. Login to Firebase:
```bash
firebase login
```

2. Initialize Firebase in your project:
```bash
firebase init hosting
```

3. Update `.firebaserc` with your project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
npm run deploy
```

Or deploy only hosting:
```bash
npm run deploy:hosting
```

### Manual Deployment Steps

If you prefer to do it manually:

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

## Project Structure

- `src/components/` - React components
- `src/lib/` - Game engine and utilities
- `src/types/` - TypeScript type definitions
- `src/pages/` - Page components
- `src/hooks/` - Custom React hooks

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide React Icons 