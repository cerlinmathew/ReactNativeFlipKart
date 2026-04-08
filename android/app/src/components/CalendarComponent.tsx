import React from 'react'
import { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

const CalendarComponent = () => {
    useEffect(() => {
        (async () => {
            try {
                const { status } = await Calendar.requestCalendarPermissionsAsync();

                if (status === 'granted') {
                    const calendars = await Calendar.getCalendarsAsync(
                        Calendar.EntityTypes.EVENT
                    );
                    console.log('Calendars:', calendars);
                } else {
                    console.log('Permission not granted');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        })();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>Calendar Module Example</Text>
            <Button title="Create a new calendar" onPress={createCalendar} />
        </View>
    )
}

async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
}

async function createCalendar() {
    const defaultCalendarSource =
        Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Expo Calendar',
        color: 'blue',
        entityType: Calendar.EntityTypes.EVENT,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default CalendarComponent