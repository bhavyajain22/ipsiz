import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import DescriptionTypo from '../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import {getSpecialForAcrobatsService} from '../../../services/profile-services/special-for-acrobats.service';
import {IGetSpecialForAcrobats} from '../../../types/response-types/profile-types/special-for-acrobats';
import {styles} from './SpecialForAcrobats.styles';

const SpecialForAcrobatsScreen = () => {
  const [specialForAcrobatsContent, setSpecialForAcrobatsContent] = useState<
    IGetSpecialForAcrobats
  >({
    firstSection: {
      title: '',
      content: '',
      total: '',
    },
    secondSection: [],
    thirdSection: [],
    fourthSectionImage: '',
    fourthSection: [],
  });

  useEffect(() => {
    getSpecialForAcrobatsService().then(({data: {data}}) => {
      setSpecialForAcrobatsContent(data);
    });
  }, []);

  return (
    <View style={styles.viewContainer}>
      <ScrollView
        contentContainerStyle={{backgroundColor: COLORS.mainBackground}}>
        {/* FIRST CARD */}
        <View style={styles.firstCard}>
          <View>
            <Text style={styles.firstCardTextLight}>Cambazlara Özel</Text>
            <Text style={styles.firstCardTextRegular}>Jetonlarınız</Text>
          </View>
          <View style={styles.totalPointsContainer}>
            <Text style={styles.totalPointsText}>
              {specialForAcrobatsContent.firstSection.total}
            </Text>
          </View>
        </View>
        {/* SECOND CARD */}
        <View style={styles.secondCard}>
          <H2Typo
            text="Cambazlara Özel Nedir?"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo
            textStyle={globalStyles.marginTopTen}
            text="İpsizcambaz üyesiyseniz, yaptığınız her alışveriş için size özel
            Jeton kazanırsınız ve dilerseniz daha sonraki alışverişlerinizi
            biriktirdiğiniz Jetonlarınızı kullanarak gerçekleştirebilirsiniz."
          />
          <View style={styles.processContainer}>
            {specialForAcrobatsContent.secondSection.map(
              ({title, image, order}) => (
                <View style={styles.singleProcess}>
                  <Text style={styles.orderText}>{order}</Text>
                  <View>
                    <Image source={{uri: image}} style={styles.processImage} />
                    <View style={styles.processTextContainer}>
                      <Text style={styles.processText}>{title}</Text>
                    </View>
                  </View>
                </View>
              ),
            )}
          </View>
        </View>
        {/* THIRD CARD */}
        <View style={styles.thirdCard}>
          {specialForAcrobatsContent.thirdSection.map(
            ({title, content, order}) => (
              <View style={globalStyles.marginTopTen}>
                <H2Typo
                  text={`${order}. ${title}`}
                  textStyle={{color: COLORS.mainGreen}}
                />
                <DescriptionTypo
                  text={content}
                  textStyle={globalStyles.marginTopTen}
                />
              </View>
            ),
          )}
        </View>
        <BottomDivider />
      </ScrollView>
    </View>
  );
};

export default SpecialForAcrobatsScreen;
