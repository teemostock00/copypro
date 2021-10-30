from keras.models import load_model
import cv2
import numpy as np
from keras.applications.vgg16 import VGG16, decode_predictions

model = load_model('./food_tm.h5')

def place(imgpath):
    im = cv2.resize(cv2.imread(imgpath),(224,224))
    im = np.expand_dims(im, axis=0)

    prediction=np.argmax(model.predict(im), axis=-1)
    print(prediction[0])

    label = ['보리비빔밥(Boli_bibimbab)', '불고기(Bulgogi)', '꼬막정식(Kkomag_jeongsig)',
            '간장게장(Ganjang_gejang)', '곱창(Gobchang)', '곰탕(Gomtang)',
            '굴비정식(Gulbi_jeongsig)', '한우육회(Hanuyughoe)', '장어구이(Jangeogui)',
            '칼국수(Kalguksu)', '오리탕(Olitang)', '삼겹살(Samgyeobsal)', 
            '상추튀김(Sangchutwigim)', '떡갈비(Tteoggalbi)', '떡볶이(Tteokbokki)']
    return label[prediction[0]]