/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  YellowBox,
} from 'react-native';

import { Button1 } from './styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const ENTRIES1 = [
  {
    title: 'Deezer Student',
    color: '#f53f81',
    subtitle: '3 meses grátis',
    price: 'A partir dai, R$ 8,45/mês',
    text:
      'Receba 50% de desconto no Deezer Premium para embalar o seu semestre.',
    text2: 'EXPERIMENTE AGORA',
    text3:
      'Sem fidelidade. Cancelamento a qualquer momento. Termos e condições se aplicam',
  },
  {
    title: 'Deezer Premium',
    color: '#000',
    subtitle: '3 meses grátis',
    price: 'A partir dai, R$ 16,90/mês',
    text:
      'Experiência sem anúncios, com acesso ilimitado a milhões de faixas, escuta offline e recomendações personalizadas.',
    text2: 'EXPERIMENTE AGORA',
    text3: 'Sem fidelidade. Cancelamento a qualquer momento.',

    illustration: 'https://i.imgur.com/vSere7h.png',
  },
  {
    title: 'Deezer Family',
    color: '#f53f81',
    subtitle: '3 meses grátis',
    price: 'A partir dai, R$ 26,90/mês',
    text: '6 perfis Premium para toda a família.',
    text2: 'EXPERIMENTE AGORA',
    text3: 'Sem fidelidade. Cancelamento a qualquer momento.',
  },
  {
    title: 'Deezer HIFI',
    color: '#f53f81',
    subtitle: '3 meses grátis',
    price: 'A partir dai, R$ 33,80/mês',
    text: 'Todo os benefícios do Premium com som em qualidade FLAC otimizado.',
    text2: 'EXPERIMENTE AGORA',
    text3: 'Sem fidelidade. Cancelamento a qualquer momento.',
  },
  {
    title: 'Deezer Free',
    color: '#ffff',
    subtitle: 'Sua oferta atual',

    text:
      'Suporte de anúncios, modo aleatório com base em recomendações personalizadas.',
    textCinza: 'CONTINUE GRATUITO',
  },
];
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Button1 color={item.color}>{item.text2}</Button1>
        <Text style={styles.text3}>{item.text3}</Text>
        <Text style={styles.textCinza}>{item.textCinza}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward} />
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  item: {
    position: 'relative',
    top: 140,
    width: screenWidth - 57,
    height: screenWidth - 60,
  },
  imageContainer: {
    height: 620,

    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: '#1b1b1c',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'relative',
    bottom: 550,
    textAlign: 'center',
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    position: 'relative',
    bottom: 540,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    position: 'relative',
    bottom: 535,
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
  text: {
    position: 'relative',
    bottom: 420,
    width: 324,
    marginLeft: 17,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  text2: {
    fontWeight: 'bold',
  },
  text3: {
    position: 'relative',
    bottom: 300,
    width: 312,
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    marginLeft: 17,
  },
  textCinza: {
    color: '#696969',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    bottom: 390,
    width: 312,
    textAlign: 'center',
    marginLeft: 17,
  },
});
