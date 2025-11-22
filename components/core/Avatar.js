import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Avatar = React.forwardRef(
  ({ src, alt, fallback, size = "default", style, ...props }, ref) => {
    const [error, setError] = React.useState(false);

    // Determine size styles
    let avatarSize = 40; // default
    switch (size) {
      case "sm":
        avatarSize = 32;
        break;
      case "lg":
        avatarSize = 64;
        break;
      case "xl":
        avatarSize = 96;
        break;
      default:
        avatarSize = 40;
    }

    return (
      <View
        ref={ref}
        style={[styles.container, { width: avatarSize, height: avatarSize }, style]}
        {...props}
      >
        {src && !error ? (
          <Image
            source={{ uri: src }}
            style={[styles.image, { width: avatarSize, height: avatarSize }]}
            onError={() => setError(true)}
          />
        ) : (
          <View style={[styles.fallback, { width: avatarSize, height: avatarSize }]}>
            <Text style={styles.fallbackText}>
              {fallback || alt?.charAt(0) || "?"}
            </Text>
          </View>
        )}
      </View>
    );
  }
);

Avatar.displayName = "Avatar";

const styles = StyleSheet.create({
  container: {
    borderRadius: 999, // rounded-full
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0", // fallback bg
  },
  image: {
    resizeMode: "cover",
  },
  fallback: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0b0b0", // muted color
  },
  fallbackText: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#555555", // muted foreground
  },
});

export { Avatar };
