import * as React from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager, StyleSheet } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({ title, children, style }) => {
    const [expanded, setExpanded] = React.useState(false);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <View style={[styles.itemContainer, style]}>
            <TouchableOpacity
                onPress={toggleExpand}
                style={styles.header}
            >
                <Text style={styles.headerText}>{title}</Text>
                <ChevronDown
                    size={16}
                    color="#0f172a"
                    style={{ transform: [{ rotate: expanded ? '180deg' : '0deg' }] }}
                />
            </TouchableOpacity>
            {expanded && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
        </View>
    );
};

const Accordion = ({ items, style }) => {
    return (
        <View style={[styles.container, style]}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // slate-200
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 0,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#0f172a', // text-foreground
    },
    content: {
        paddingBottom: 16,
    },
});

export { Accordion, AccordionItem };
