import React from 'react';
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import { 
    TouchableOpacity, 
    StatusBar,
    Text,
    ScrollView,
} from 'react-native';

import { 
    PageArea, 
    GreetingsTitle,
    DescriptionText,
    GreetinsBorder,
    AudioListContainer,
    AudioItem,
    BottomBar, 
    BottomBarContainer, 
    IconImage,
    IconTitle,
} from '../styles/nature_sound_styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import NaturePlayer from '../players/nature_player';

const NatureSound = ({navigation}) => {
    return (
        <PageArea>
            <StatusBar 
                backgroundColor="#0C2C58"
            />
            
            <GreetingsTitle>Sons da Natureza</GreetingsTitle>
            <GreetinsBorder></GreetinsBorder>
            
            <DescriptionText>
                Aqui você pode encontrar sons da natureza em geral. Tais como: {'\n'} {'\n'}
                - Sons de Chuva {'\n'}
                - Sons de Pássaros {'\n'}
                - Sons de Cachoreiras {'\n'}
                - Etc...
            </DescriptionText>

            <AudioListContainer>
                <ScrollView>
                    <AudioItem onPress={() => {
                        navigation.navigate('Nature Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: 80, fontSize: 18}}>Sons de Chuva</Text>
                    </AudioItem>

                    <AudioItem onPress={() => {
                        navigation.navigate('Nature Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: 80, fontSize: 18}}>Sons de Pássaros</Text>
                    </AudioItem>

                    <AudioItem onPress={() => {
                        navigation.navigate('Nature Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: 80, fontSize: 18, textAlign: 'center'}}>Sons de Cachoeiras</Text>
                    </AudioItem >

                    <AudioItem onPress={() => {
                        navigation.navigate('Nature Player');
                    }}>
                        <Ionicons name="play-sharp" size={30} />
                        <Text style={{marginLeft: 80, fontSize: 18}}>Sons do Mar</Text>
                    </AudioItem>
                </ScrollView>
                
            </AudioListContainer>

            <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,}}
                onAdLoaded={() => {
                console.log('Advert loaded');}}
                onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);}}
            />

            <BottomBar>
                <BottomBarContainer>
                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="home-outline" size={30} />
                        <IconTitle>Home</IconTitle>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Audios')}>
                        <IconImage source={require('../../assets/images/sound.png')} />
                        <IconTitle>Audios</IconTitle>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}
                    onPress={() => navigation.navigate('About Us')}>
                        <Ionicons name="menu-outline" size={30} />
                        <IconTitle>Sobre</IconTitle>
                    </TouchableOpacity>

                </BottomBarContainer>
            </BottomBar>
        </PageArea>
    )
}

export default NatureSound;