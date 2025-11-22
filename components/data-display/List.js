import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const ListItem = ({ title, subtitle, left, right, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={!onPress}
            style={styles.itemContainer}
        >
            <View style={styles.itemLeft}>
                {left}
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>
            <View style={styles.itemRight}>
                {right}
                {onPress && <ChevronRight size={16} color="#94a3b8" />}
            </View>
        </TouchableOpacity>
    );
};

const List = ({ data, renderItem, ...props }) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem || (({ item }) => <ListItem {...item} />)}
            style={styles.list}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9', // slate-100
        backgroundColor: '#ffffff', // background
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 16, // for RN >=0.72; otherwise use marginRight on left
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#0f172a', // text-foreground
    },
    subtitle: {
        fontSize: 14,
        color: '#94a3b8', // muted-foreground
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, // for RN >=0.72; otherwise use marginLeft
    },
});

export { List, ListItem };
