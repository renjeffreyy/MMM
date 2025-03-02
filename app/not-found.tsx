"use client";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Cat
        role="image"
        aria-label={`${APP_NAME} logo`}
        width={48}
        height={48}
      />
      <div className="p-6 w-1/3 rounded-lg show-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Return to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
