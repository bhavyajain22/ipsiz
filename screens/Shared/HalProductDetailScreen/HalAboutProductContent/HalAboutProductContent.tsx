import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import {styles} from './HalAboutProductContent.styles';
import {WebView} from 'react-native-webview';
import {COLORS} from '../../../../assets/colors';
import {ISingleQA} from '../../../../types/IProductDetailed.type';
import HalQuestionAnswersTab from './HalQuestionAnswersTab/HalQuestionAnswersTab';

const HalAboutProductContent: React.FC<{
  focusedTab: 0 | 1 | 2 | 3;
  description: string;
  attributes: string;
  qas: ISingleQA[];
  agreementDetails: string;
}> = ({qas, description, attributes, focusedTab, agreementDetails}) => {
  return (
    <View style={styles.container}>
      <RegularTabView
        tabActiveColor={COLORS.mainGreen}
        tabInactiveColor={COLORS.midGray}
        containerStyle={globalStyles.marginTopTen}
        scrollEnabled={true}
        startingIndex={focusedTab as number}
        routes={[
          {key: 'description', title: 'Ürün Açıklaması'},
          {key: 'attributes', title: 'Ürün Özellikleri'},
          {key: 'questions', title: 'Soru ve Cevaplar'},
          {key: 'aggreementOptions', title: 'Mütabakat Şartları'},
        ]}
        scenesObj={{
          description: () => (
            <View style={styles.singleTab}>
              <WebView source={{html: description}} />
            </View>
          ),
          attributes: () => (
            <View style={styles.singleTab}>
              <WebView source={{html: attributes}} />
            </View>
          ),
          questions: () => <HalQuestionAnswersTab qas={qas} />,
          aggreementOptions: () => (
            <View style={styles.singleTab}>
              <WebView source={{html: agreementDetails}} />
            </View>
          ),
        }}
      />
    </View>
  );
};

export default HalAboutProductContent;
