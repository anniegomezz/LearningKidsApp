import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import { useFonts, EBGaramond_600SemiBold, EBGaramond_800ExtraBold } from '@expo-google-fonts/eb-garamond';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Home({ onPressGameHub, onPressWardrobe}) {
    const [selectedCorgi, setSelectedCorgi] = useState(null);

    let [fontsLoaded] = useFonts({
        EBGaramond_600SemiBold, 
        EBGaramond_800ExtraBold
    });

    if (!fontsLoaded) {
        return null;
    }

    const route = useRoute();
    const { child_username } = route.params;
    const navigation = useNavigation();

    const logoutButton = () => {
        navigation.navigate('signup_login/login', {child_username}); 
    };

    const emergency_contact_home_button = () => {
        navigation.navigate('home/emergency_contact_home', {child_username}); 
    };
    
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#3976b2', '#6495ED', '#B0C4DE', '#6495ED', '#3976b2']} style={styles.background} />

            <View style={styles.title_container}>
                <Text style={styles.title}>Welcome Home, {child_username}!</Text>
            </View>
            

            <Link href={`/home/profile?child_username=${child_username}`} asChild>
                <Pressable style={styles.corgiProfileHouseContainer}>
                    <Image source={require('../../assets/doggohouse.gif')} style={styles.dogHouseImage} />
                </Pressable>
            </Link>

            <View style={styles.buttonsContainer}>
                <Link href={`/gamehub/gamehub_mainscreen?child_username=${child_username}`} asChild>
                    <Pressable style={styles.button} onPress={onPressGameHub}>
                        <Text style={styles.text}>Game Hub</Text>
                    </Pressable>
                </Link>

                <Link href={{ pathname: '/home/wardrobe', params: { child_username, selectedCorgi } 
                }} asChild>
                    <Pressable style={styles.button} onPress={onPressWardrobe}>
                        <Text style={styles.text}>Corgi Wardrobe</Text>
                    </Pressable>
                </Link>

                    <Pressable style={styles.button} onPress={emergency_contact_home_button}>
                        <Text style={styles.text}>Add New Contact</Text>
                    </Pressable>
            </View>


            <View style={styles.upper_left_corner_button}>
                <Pressable style={styles.smaller_button} onPress={logoutButton}>
                    <Text style={styles.text}>Logout</Text>
                </Pressable>
            </View>


   
            <Link href={`/home/settings?child_username=${child_username}`} asChild>
            <Pressable style={styles.settings_container}>
                    <Image source={require('../../assets/settings_gear.png')} style={styles.settings_gear_image}/>
            </Pressable>
            </Link>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A7C7E7',
        ...StyleSheet.absoluteFillObject,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    title_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 150,
    },
    sub_title_container:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 200,

    },
    corgiProfileHouseContainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 250,

    },
    settings_container:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 500,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'EBGaramond_800ExtraBold',
    },
    buttonsContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 70,
    },
    button: {
        width: 175,
        padding: 10,
        backgroundColor: '#f7e7b4',
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 15,
        fontFamily: 'EBGaramond_800ExtraBold',
        textAlign: 'center',
    },
    dogHouseImage: {
        bottom: 60,
        width: 200,
        height: 200,
    },
    settings_gear_image: {
        bottom: 380,
        width: 75,
        height: 75,
        position: 'absolute',
        left: 100,
        
    },
    upper_left_corner_button: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    smaller_button:{
        width: 100,
        padding: 10,
        backgroundColor: '#f7e7b4',
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    
});
