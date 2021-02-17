import React from 'react';
import {Image, View} from 'react-native';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';
import DescriptionTypo from '../../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {ISingleQA} from '../../../../../types/IProductDetailed.type';
import {styles} from './QuestionAnswersTab.styles';

const QuestionAnswersTab: React.FC<{qas: ISingleQA[]}> = ({qas}) => {
  return (
    <View style={styles.container}>
      {qas.length ? (
        <>
          {qas.map((item) => (
            <View key={item.answer} style={styles.itemContainer}>
              <H3Typo
                text={item.question}
                textStyle={{color: COLORS.mainGreen}}
              />
              <DescriptionTypo
                textStyle={globalStyles.marginTopTen}
                text={item.answer}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          <View style={styles.mainBack}>
            <Image
              source={{
                uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
              }}
              style={styles.logoStyle}
            />
          </View>

          <View style={styles.noQaCardContainer}>
            <View style={styles.cardStyle}>
              <H3Typo
                text="Ürün Hakkında Soru-Cevap Bulunmamaktadır."
                textStyle={styles.noQaText}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default QuestionAnswersTab;
