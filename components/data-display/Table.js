import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Table = ({ headers, data, renderRow, style }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.tableContainer, style]}>
                {/* Table Header */}
                <View style={styles.tableHeader}>
                    {headers.map((header, index) => (
                        <View key={index} style={styles.cell}>
                            <Text style={styles.headerText}>{header}</Text>
                        </View>
                    ))}
                </View>

                {/* Table Rows */}
                {data.map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[
                            styles.tableRow,
                            rowIndex === data.length - 1 && { borderBottomWidth: 0 },
                        ]}
                    >
                        {renderRow ? (
                            renderRow(row, rowIndex)
                        ) : (
                            Object.values(row).map((cell, cellIndex) => (
                                <View key={cellIndex} style={styles.cell}>
                                    <Text style={styles.cellText}>{cell}</Text>
                                </View>
                            ))
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
        minWidth: '100%',
        borderWidth: 1,
        borderColor: '#e2e8f0', // border-slate-200
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f8fafc', // bg-slate-50
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9', // border-slate-100
    },
    cell: {
        padding: 16,
        minWidth: 100,
        flex: 1,
    },
    headerText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#0f172a', // text-slate-900
    },
    cellText: {
        fontSize: 14,
        color: '#475569', // text-slate-700
    },
});

export { Table };
