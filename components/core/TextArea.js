import * as React from 'react';
import { TextInput, View, Text } from 'react-native';
import { cn } from '../../lib/utils';

const TextArea = React.forwardRef(({ className, label, error, numberOfLines = 4, ...props }, ref) => {
    return (
        <View className="w-full gap-1.5">
            {label && (
                <Text className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {label}
                </Text>
            )}
            <TextInput
                className={cn(
                    'flex min-h-[80px] w-full rounded-md border border-slate-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    error && 'border-red-500',
                    className
                )}
                ref={ref}
                multiline={true}
                numberOfLines={numberOfLines}
                textAlignVertical="top"
                placeholderTextColor="#94a3b8"
                {...props}
            />
            {error && (
                <Text className="text-sm font-medium text-red-500">
                    {error}
                </Text>
            )}
        </View>
    );
});

TextArea.displayName = 'TextArea';

export { TextArea };
