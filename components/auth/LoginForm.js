import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../core/Input';
import { Button } from '../core/Button';

const LoginForm = ({ onSubmit, onForgotPassword, onRegister, style }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        await onSubmit({ email, password });
        setLoading(false);
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.subtitle}>
                    Enter your credentials to access your account
                </Text>
            </View>

            <View style={styles.form}>
                <Input
                    label="Email"
                    placeholder="name@example.com"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <View style={styles.passwordContainer}>
                    <Input
                        label="Password"
                        placeholder="••••••••"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={onForgotPassword} style={styles.forgotButton}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.actions}>
                <Button onPress={handleSubmit} loading={loading}>
                    Sign In
                </Button>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={onRegister}>
                        <Text style={styles.registerLink}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0f172a',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#64748b', // muted-foreground
        marginTop: 4,
    },
    form: {
        marginBottom: 16,
    },
    passwordContainer: {
        marginTop: 12,
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    forgotText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#3b82f6', // primary
    },
    actions: {
        marginTop: 16,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    registerText: {
        fontSize: 14,
        color: '#64748b', // muted-foreground
    },
    registerLink: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3b82f6', // primary
        marginLeft: 4,
    },
});

export { LoginForm };
