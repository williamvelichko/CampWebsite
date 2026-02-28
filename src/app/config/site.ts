export const isTemporaryModeEnabled =
  process.env.NEXT_PUBLIC_TEMPORARY_MODE === "true";

export const primaryNavLinks = isTemporaryModeEnabled
  ? [
      { href: "/", label: "Home" },
      { href: "/faq", label: "FAQ" },
    ]
  : [
      { href: "/", label: "Home" },
      { href: "/schedule", label: "Schedule" },
      { href: "/faq", label: "FAQ" },
      { href: "/registration", label: "Register" },
    ];

export const temporaryModeMessage = {
  title: "Registration will open later",
  description:
    "We are temporarily updating camp content. The new registration, schedule, and other event details will be published soon.",
};
