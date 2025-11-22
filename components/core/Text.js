import { Text as RNText } from 'react-native';
import { cn } from '../../lib/utils';

export function Text({ className, asChild, ...props }) {
    return (
        <RNText
            className={cn('text-base text-foreground web:select-text', className)}
            {...props}
        />
    );
}
