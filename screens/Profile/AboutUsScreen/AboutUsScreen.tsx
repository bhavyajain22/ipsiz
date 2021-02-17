import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import SingleProductSkeleton from '../../../components/micro-components/skeletons/SingleProductRegularSkeleton';
import DescriptionTypo from '../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import {getAboutUsService} from '../../../services/profile-services/about-us.service';
import {ISingleAboutRow} from '../../../types/response-types/profile-types/about-us.types';
import {styles} from './AboutUsScreen.styles';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const AboutUsScreen = () => {
  const [aboutLoading, setAboutLoading] = useState<boolean>(false);
  const [aboutRows, setAboutRows] = useState<ISingleAboutRow[]>([]);

  useEffect(() => {
    setAboutLoading(true);
    getAboutUsService()
      .then(({data: {data}}) => {
        setAboutRows(data);
      })
      .finally(() => setAboutLoading(false));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ParallaxScrollView
        backgroundColor="white"
        style={{flex: 1, backgroundColor: 'hotpink', overflow: 'hidden'}}
        renderBackground={() => (
          <>
            <Image
              source={{
                uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
              }}
              style={styles.logo}
            />
            <Text style={styles.text}>Sürüm 1.0.0</Text>
          </>
        )}
        parallaxHeaderHeight={320}>
        {aboutLoading ? (
          <SingleProductSkeleton />
        ) : (
          <>
            {aboutRows.map(({title, content, image}, index) => (
              <>
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.contentCard,
                    marginTop: index > 0 ? 50 : -50,
                  }}>
                  {image && (
                    <View style={styles.imageContainer}>
                      <Image source={{uri: image}} style={styles.image} />
                    </View>
                  )}
                  <H2Typo
                    text={title}
                    textStyle={{color: COLORS.mainGreen, textAlign: 'center'}}
                  />
                  <DescriptionTypo
                    textStyle={{...globalStyles.marginTopTen,textAlign:'center'}}
                    text={content}
                  />
                </View>

              </>
            ))}
              <View style={{height: 40}} />
          </>
        )}
      </ParallaxScrollView>
    </View>
  );
};

export default AboutUsScreen;
