import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import {styles} from './AboutProductContent.styles';
import {WebView} from 'react-native-webview';
import {COLORS} from '../../../../assets/colors';
import QuestionAnswersTab from './QuestionAnswersTab/QuestionAnswersTab';
import {ISingleQA} from '../../../../types/IProductDetailed.type';

const AboutProductContent: React.FC<{
  focusedTab: 0 | 1 | 2 | 3 | 4 | null;
  description: string;
  attributes: string;
  installmentDetails: string;
  qas: ISingleQA[];
  refundmentDetails: string;
}> = ({
  focusedTab,
  description,
  attributes,
  installmentDetails,
  qas,
  refundmentDetails,
}) => {
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
          {key: 'paymentOptions', title: 'Taksit Seçenekleri'},
          {key: 'cashback', title: 'İade Koşulları'},
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
          questions: () => <QuestionAnswersTab qas={qas} />,
          paymentOptions: () => (
            <View style={styles.singleTab}>
              <WebView source={{html: installmentDetails}} />
            </View>
          ),
          cashback: () => (
            <View style={styles.singleTab}>
              <WebView source={{html: refundmentDetails}} />
            </View>
          ),
        }}
      />
    </View>
  );
};

export default AboutProductContent;
