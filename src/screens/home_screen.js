import React from 'react';
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import { 
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { 
    PageArea, 
    GreetingsTitle,
    DescriptionText,
    GreetinsBorder,
    BottomBar, 
    BottomBarContainer, 
    IconImage,
    IconTitle,
} from '../styles/home_screens_styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
    return (
        <PageArea>
            <StatusBar 
                backgroundColor="#0C2C58"
            />
            
            <GreetingsTitle>Medite e Relaxe</GreetingsTitle>
            <GreetinsBorder></GreetinsBorder>
            
            
            <DescriptionText>
                Nestes tempos em que a ansiedade, a pressa, a corrida contra o tempo está presente na vida de todas as pessoas, em certos momentos, todos nós precisamos realizar pausas, e ter momentos para que possamos nos desligar dos problemas, da correria do dia a dia! {'\n'} {'\n'}

                E é por isto que estamos aqui! {'\n'} {'\n'} 
                
                Chegamos para poder lhe ajudar a equilibrar as energias, os sentimentos, e trazer a paz e a tranquilidade que por vezes deixamos passar no decorrer dos dias!
            </DescriptionText>

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
                    
                    <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}>
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

export default HomeScreen;