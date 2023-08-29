import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

export default function NewDetailScreen() {

  return (
    <ScrollView>
      <Appbar.Header style={{ backgroundColor: 'white', elevation: 0 }}>
        <Appbar.Action icon="chevron-left" onPress={() => console.log('Geri tuşuna basıldı')} />
        <Appbar.Content title="" />
        <Appbar.Action icon="share" onPress={() => console.log('Paylaş tuşuna basıldı')} />
        <Appbar.Action icon="dots-vertical" onPress={() => console.log('Üç nokta tuşuna basıldı')} />
      </Appbar.Header>
      <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />
      <View style={{ backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 10, marginLeft: 10, marginRight: 5 }}>
        <Text style={{ fontSize: 33, fontWeight: 'bold' }}>Bringing Your React Native App to Life: How to add Eye-Catching Animated Splash Screens</Text>
        <Text style={{ marginTop: 10 }}>
          A splash screen, or launch screen, is the very first thing users see when they open your app. It’s like the app’s cool intro that grabs their attention right away.
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="user" size={18} color="gray" />
            <Text style={{ marginLeft: 5, color: 'gray' }}>manuchim   ·</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Feather name="" size={18} color="gray" />
              <Text style={{ marginLeft: 0, color: 'green' }}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', color: 'gray' }}>
            <Text style={{ color: 'gray' }}>Jul 12, 2023   ·</Text>
            <Text style={{ marginLeft: 10, color: 'gray' }}>5 min read</Text>
          </View>
        </View>
        <Image source={require('../assets/splash.png')} style={{ width: 350, height: 250, alignSelf: 'center', marginTop: 35 }} />
        <Text style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Why is it important to have a well-designed splash screen?</Text>
          {'\n\n'}
          The splash screen is your first chance to show off your brand. It will set the tone of the app and create a seamless transition to your content. Having a slick and stylish splash screen helps people remember your brand and makes a professional first impression.
        </Text>
        <Text style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>How to implement an animated splash screen?</Text>
          {'\n\n'}
          First, you need an animated logo. You can choose any way you prefer to animate your logo. Now here’s how to set up easy, animated splash screens using modals.
          {'\n\n'}
          Let’s say you have a simple app that already contains a navigation container. This is what your app would look like:
        </Text>
        <Image
          source={require('../assets/i1.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 7 / 2,
            alignSelf: 'center',
            marginTop: 35
          }}
        />
        <Text style={{ marginTop: 20 }}>
          First implement a very simple splash screen with no images and a background color that matches the one of your animation.
          {'\n\n'}
          For example, if you're using Expo, you can modify the file <Text style={{ fontWeight: 'bold' }}>app.json</Text>.
        </Text>
        <Image
          source={require('../assets/i2.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 9 / 2,
            alignSelf: 'center',
            marginTop: 20
          }}
        />
        <Text style={{ marginTop: 20 }}>
          You can now create a modal that will contain your Splash screen. The two main tricks are:
          {'\n\n'}
          1. To close the modal once it has played once
          {'\n\n'}
          2. To add a fading animation
        </Text>
        <Image
          source={require('../assets/i3.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 9 / 6,
            alignSelf: 'center',
            marginTop: 20
          }}
        />
        <Text style={{ marginTop: 20 }}>
          Now add splash-screen to your app:
        </Text>
        <Image
          source={require('../assets/i4.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 11 / 4,
            alignSelf: 'center',
            marginTop: 20
          }}
        />
        <Text style={{ marginTop: 20 }}>
          You now have an animated splash screen when you launch your app!
          {'\n\n'}
          A‍nd that’s it!‍
        </Text>
        
        <View style={{ backgroundColor: 'white', marginTop: 30, paddingVertical: 20, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/author.jpeg')} // Yazarın profil resmi
              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Yazar Adı</Text>
              <Text style={{ color: 'gray' }}>123 Takipci</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ color: 'green' }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: 'blue' }}>Mesaj Gonder</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>
          Yazar hakkında kısa bir açıklama metni burada yer alabilir. Yazarın uzmanlık alanları, ilgi alanları veya
          diğer bilgiler hakkında bilgi vermek için kullanılabilir.
        </Text>
      </View>



      </View>
    </ScrollView>
  );
}
