// components/SocialShare.tsx

import { FC } from "react";
import { Button } from "./ui/button";

interface SocialShareProps {
    url: string;
    title: string;
    image: string;
}

export const SocialShare: FC<SocialShareProps> = ({ url, title, image }) => {
    const handleSocialShare = (platform: string) => {
        const shareText = `Check out this amazing recipe: ${title}`;
        let shareUrl = "";

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
                break;
            case "pinterest":
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(shareText)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank", "noopener noreferrer");
    };

    return (
        <div className="flex gap-4 mt-6">
            <Button onClick={() => handleSocialShare("facebook")} className="bg-blue-600 text-white">
                Share on Facebook
            </Button>
            <Button onClick={() => handleSocialShare("twitter")} className="bg-blue-400 text-white">
                Share on Twitter
            </Button>
            <Button onClick={() => handleSocialShare("pinterest")} className="bg-red-500 text-white">
                Share on Pinterest
            </Button>
        </div>
    );
};
