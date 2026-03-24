import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import { CarouselData } from '../data/CarouselData'

const data = CarouselData
const width = Dimensions.get("window").width;

function App() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({

            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                ref={ref}
                width={width}
                height={width * 0.5}
                data={data}
                pagingEnabled
                onProgressChange={(absoluteProgress) => {
                    progress.value = absoluteProgress;
                }}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <Image
                            source={item.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
              
                onPress={onPressPagination}
            />
        </View>
    );
}

export default App;