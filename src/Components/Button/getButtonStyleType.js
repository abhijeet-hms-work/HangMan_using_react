function getButtonStyling(styleType) {
  const primaryButton =
    "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";
  const secondaryButtonStyling =
    "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
  const waringButtonStyling =
    "bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900";

  const errorButtonStyling =
    "bg-red-500 border border-red-700 hover:bg-red-700 hover:border-red-900";

  if (styleType === "primary") {
    return primaryButton;
  } else if (styleType === "secondary") {
    return secondaryButtonStyling;
  } else if (styleType === "warning") {
    return waringButtonStyling;
  } else if (styleType === "error") {
    return errorButtonStyling;
  } else {
    return primaryButton;
  }
}

export default getButtonStyling;
