import * as React from 'react';
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    Animated,
    PanResponder,
    Dimensions,
    StyleSheet,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = ({ visible, onClose, children, title, style }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const panY = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    React.useEffect(() => {
        if (visible) {
            setShowModal(true);
            Animated.spring(panY, {
                toValue: 0,
                useNativeDriver: true,
                bounciness: 0,
            }).start();
        } else {
            Animated.timing(panY, {
                toValue: SCREEN_HEIGHT,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setShowModal(false));
        }
    }, [visible]);

    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    panY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > SCREEN_HEIGHT / 3 || gestureState.vy > 0.5) {
                    onClose();
                } else {
                    Animated.spring(panY, {
                        toValue: 0,
                        useNativeDriver: true,
                        bounciness: 0,
                    }).start();
                }
            },
        })
    ).current;

    if (!showModal) return null;

    return (
        <Modal
            transparent
            visible={showModal}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity
                    style={styles.flexFill}
                    onPress={onClose}
                    activeOpacity={1}
                />
                <Animated.View style={[styles.sheet, { transform: [{ translateY: panY }] }, style]}>
                    <View {...panResponder.panHandlers} style={styles.dragHandleContainer}>
                        <View style={styles.dragHandle} />
                    </View>
                    {title && (
                        <View style={styles.header}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    )}
                    <View style={styles.content}>
                        {children}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    flexFill: {
        flex: 1,
    },
    sheet: {
        backgroundColor: '#fff', // or your theme background
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        maxHeight: '90%',
    },
    dragHandleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 8,
    },
    dragHandle: {
        height: 6,
        width: 48,
        borderRadius: 3,
        backgroundColor: '#d1d5db', // slate-300
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // slate-100
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#0f172a', // text color
    },
    content: {
        padding: 16,
    },
});

export { BottomSheet };
