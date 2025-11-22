import * as React from 'react';
import { Switch as RNSwitch, View, Text } from 'react-native';
import { cn } from '../../lib/utils';

const Toggle = React.forwardRef(({ className, label, checked, onCheckedChange, disabled, ...props }, ref) => {
    return (
        <View className={cn("flex-row items-center gap-2", className)}>
            <RNSwitch
                value={checked}
                onValueChange={onCheckedChange}
                disabled={disabled}
                trackColor={{ false: '#e2e8f0', true: '#0f172a' }}
                thumbColor={'#ffffff'}
                {...props}
            />
            {label && (
                <Text className={cn("text-sm font-medium leading-none", disabled && "opacity-50")}>
                    {label}
                </Text>
            )}
        </View>
    );
});

Toggle.displayName = 'Toggle';

export { Toggle };
