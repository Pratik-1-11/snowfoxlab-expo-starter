import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDown, Check, Building2 } from 'lucide-react-native';
import { Modal } from '../core/Modal';

const TenantSwitcher = ({ tenants, activeTenantId, onTenantChange, style }) => {
    const [visible, setVisible] = React.useState(false);
    const activeTenant = tenants.find(t => t.id === activeTenantId);

    return (
        <>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={[styles.button, style]}
            >
                <View style={styles.iconContainer}>
                    <Building2 size={16} color="#fff" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.tenantName}>{activeTenant?.name || "Select Organization"}</Text>
                    <Text style={styles.tenantPlan}>{activeTenant?.plan || "Free Plan"}</Text>
                </View>
                <ChevronDown size={16} color="#64748b" />
            </TouchableOpacity>

            <Modal
                visible={visible}
                onClose={() => setVisible(false)}
                title="Switch Organization"
            >
                <View style={styles.modalContent}>
                    {tenants.map((tenant) => (
                        <TouchableOpacity
                            key={tenant.id}
                            onPress={() => {
                                onTenantChange(tenant.id);
                                setVisible(false);
                            }}
                            style={[
                                styles.tenantItem,
                                activeTenantId === tenant.id && styles.activeTenantItem,
                            ]}
                        >
                            <View style={styles.tenantInfo}>
                                <View style={styles.avatar}>
                                    <Text style={styles.avatarText}>{tenant.name.charAt(0)}</Text>
                                </View>
                                <View>
                                    <Text style={styles.tenantName}>{tenant.name}</Text>
                                    <Text style={styles.tenantPlan}>{tenant.plan}</Text>
                                </View>
                            </View>
                            {activeTenantId === tenant.id && <Check size={16} color="#0f172a" />}
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.createTenant}>
                        <View style={styles.createAvatar}>
                            <Text style={styles.createPlus}>+</Text>
                        </View>
                        <Text style={styles.createText}>Create Organization</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#f8fafc', // optional hover bg equivalent
    },
    iconContainer: {
        height: 32,
        width: 32,
        borderRadius: 8,
        backgroundColor: '#3b82f6', // primary
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    },
    tenantName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0f172a',
    },
    tenantPlan: {
        fontSize: 12,
        color: '#64748b',
    },
    modalContent: {
        gap: 8,
    },
    tenantItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    activeTenantItem: {
        backgroundColor: '#f1f5f9', // slate-100
    },
    tenantInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        height: 32,
        width: 32,
        borderRadius: 8,
        backgroundColor: '#e2e8f0', // slate-200
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontWeight: '500',
        color: '#475569', // slate-700
    },
    createTenant: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb', // slate-100
        marginTop: 8,
    },
    createAvatar: {
        height: 32,
        width: 32,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#cbd5e1', // slate-300
        alignItems: 'center',
        justifyContent: 'center',
    },
    createPlus: {
        color: '#94a3b8', // slate-400
    },
    createText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#64748b', // muted-foreground
    },
});

export { TenantSwitcher };
