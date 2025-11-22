import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Bell, MessageSquare, AlertCircle } from 'lucide-react-native';

const NotificationItem = ({ title, message, type = 'default', time, read, onPress }) => {
    let Icon = Bell;
    let iconColor = '#94a3b8';
    let bgColor = '#e2e8f0'; // slate-100

    switch (type) {
        case 'message':
            Icon = MessageSquare;
            iconColor = '#3b82f6';
            bgColor = '#dbeafe'; // blue-100
            break;
        case 'alert':
            Icon = AlertCircle;
            iconColor = '#ef4444';
            bgColor = '#fee2e2'; // red-100
            break;
        default:
            Icon = Bell;
            iconColor = '#94a3b8';
            bgColor = '#e2e8f0';
            break;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.itemContainer, !read && styles.unreadBackground]}
        >
            <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
                <Icon size={20} color={iconColor} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.titleRow}>
                    <Text style={[styles.title, !read && styles.unreadTitle]}>{title}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={styles.message} numberOfLines={2}>{message}</Text>
            </View>
            {!read && <View style={styles.unreadDot} />}
        </TouchableOpacity>
    );
};

const NotificationList = ({ notifications, onNotificationPress, style }) => {
    return (
        <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NotificationItem
                    {...item}
                    onPress={() => onNotificationPress && onNotificationPress(item)}
                />
            )}
            style={[styles.listContainer, style]}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // slate-100
        position: 'relative',
    },
    unreadBackground: {
        backgroundColor: '#f8fafc', // slate-50
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        gap: 4,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0f172a', // foreground
    },
    unreadTitle: {
        fontWeight: '700',
    },
    time: {
        fontSize: 12,
        color: '#94a3b8', // muted-foreground
    },
    message: {
        fontSize: 14,
        color: '#64748b', // muted-foreground
    },
    unreadDot: {
        position: 'absolute',
        top: 16,
        right: 16,
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#3b82f6', // primary
    },
});

export { NotificationList };
