import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Settings, LogOut, User } from 'lucide-react-native';
import { Avatar } from '../core/Avatar';

const ProfileCard = ({ user, onSettings, onLogout, style }) => {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.header}>
                <Avatar src={user.avatar} alt={user.name} size="lg" />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                    <View style={styles.statusContainer}>
                        <View style={styles.statusDot} />
                        <Text style={styles.statusText}>Active</Text>
                    </View>
                </View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={onSettings} style={styles.actionItem}>
                    <User size={20} color="#64748b" />
                    <Text style={styles.actionText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onSettings} style={styles.actionItem}>
                    <Settings size={20} color="#64748b" />
                    <Text style={styles.actionText}>Account Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onLogout} style={[styles.actionItem, styles.logoutItem]}>
                    <LogOut size={20} color="#ef4444" />
                    <Text style={[styles.actionText, styles.logoutText]}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3, // for Android shadow
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // slate-100
    },
    userInfo: {
        flex: 1,
        marginLeft: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
    },
    userEmail: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 2,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    statusDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#22c55e', // green-500
        marginRight: 4,
    },
    statusText: {
        fontSize: 10,
        color: '#64748b',
    },
    actions: {
        paddingVertical: 4,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        borderRadius: 8,
        backgroundColor: 'transparent',
    },
    actionText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#475569',
    },
    logoutItem: {
        backgroundColor: 'transparent',
    },
    logoutText: {
        color: '#ef4444',
    },
});

export { ProfileCard };
