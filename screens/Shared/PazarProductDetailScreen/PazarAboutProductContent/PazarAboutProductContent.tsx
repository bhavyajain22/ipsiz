import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import {styles} from './PazarAboutProductContent.styles';
import {WebView} from 'react-native-webview';
import {COLORS} from '../../../../assets/colors';
import {ISingleQA} from '../../../../types/IProductDetailed.type';
import PazarQuestionAnswersTab from './PazarQuestionAnswersTab/PazarQuestionAnswersTab';

const PazarAboutProductContent: React.FC<{
  description: string;
  attributes: string;
  focusedTab: 0 | 1 | 2 | 3 | 4 | null;
  qas: ISingleQA[];
  refundmentDetails: string;
}> = ({description, attributes, focusedTab, qas, refundmentDetails}) => {
  return (
    <View style={styles.container}>
      <RegularTabView
        tabActiveColor={COLORS.mainPurple}
        tabInactiveColor={COLORS.midGray}
        containerStyle={globalStyles.marginTopTen}
        scrollEnabled={true}
        startingIndex={focusedTab as number}
        routes={[
          {key: 'description', title: 'Ürün Açıklaması'},
          {key: 'attributes', title: 'Ürün Özellikleri'},
          {key: 'questions', title: 'Soru ve Cevaplar'},
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
          questions: () => <PazarQuestionAnswersTab qas={qas} />,
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

export default PazarAboutProductContent;
