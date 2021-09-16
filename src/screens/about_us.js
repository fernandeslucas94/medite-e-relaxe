import React from 'react';
import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import { 
    TouchableOpacity, 
    StatusBar,
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
} from '../styles/about_us_styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutUs = ({navigation}) => {
    return (
        <PageArea>
            <StatusBar 
                backgroundColor="#0C2C58"
            />
            
            <GreetingsTitle>Sobre Nós</GreetingsTitle>
            <GreetinsBorder></GreetinsBorder>
            
            
            <DescriptionText>
                Nós, como você, também gostamos de ter nossos momentos para relaxar, meditar, elevar nossos pensamentos, e entrar em sintonia com vibrações e energias positivas e elevadas!
                
                {'\n'} {'\n'}
                
                E pensando em colaborar com outras pessoas que também tenham o mesmo interesse, desenvolvemos este aplicativo com a finalidade de compartilhar boas experiências e auxiliar a outras pessoas para que também possam ter vivências positivas e benéficas durante o dia a dia!
            </DescriptionText>

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
        </PageArea>
    )
}

export default AboutUs;