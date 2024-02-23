const questions = [
    {
        question:"सामाजिक शोध की परिणात्मक विधि",
        answers: [
            { text: "सूचनाओं का संकलन करती है", correct: false},
            { text: "सामाजिक सर्वेक्षण की साधन रूप में प्रयोग करती है", correct: false},
            { text: "संख्याओं और माप को अधिक महत्व देती है", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"जब एकाधिक भाई आपस में मिलकर एक ही स्त्री से विवाह करते हैं तो उसे क्या कहते हैं?",
        answers: [
            { text: "बहुपति विवाह", correct: false},
            { text: "एक विवाह", correct: false},
            { text: "भातृक बहुपति विवाह", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"पलायन विवाह एक प्रकार है-",
        answers: [
            { text: "हिन्दु विवाह", correct: false},
            { text: "मुस्लिम विवाह", correct: false},
            { text: "जनजातीय विवाह का", correct: true},
            { text: "इसाई विवाह", correct: false},
        ] 
    },

    {
        question:"जहोदा तथा गुडे व घट ने निदर्शन को मुख्य रूप से कितने भागों में विभक्त किया है ?",
        answers: [
            { text: "एक", correct: false},
            { text: "दो", correct: true},
            { text: "तीन", correct: false},
            { text: "चार", correct: false},
        ] 
    },

    {
        question:"प्रश्नों के सामने जब निश्चित वैकल्पिक उत्तर दिए जाते हैं, उसे आप कौन-सी प्रश्नावली कहेंगे -",
        answers: [
            { text: "बन्द प्रश्नावली", correct: true},
            { text: "खुली प्रश्नावली", correct: false},
            { text: "छोटी प्रश्नावली", correct: false},
            { text: "बड़ी प्रश्नावली", correct: false},
        ] 
    },

    {
        question:"केन्द्रित साक्षात्कार का प्रयोग सर्वप्रथम किस समाजशास्त्री ने किया ?",
        answers: [
            { text: "मर्टन", correct: true},
            { text: "कूले", correct: false},
            { text: "मीड", correct: false},
            { text: "जोचर", correct: false},
        ] 
    },

    {
        question:"संचयी बारम्बारता रेखाचित्र से निम्नलिखित में से किस एक प्रकार का औसत आकलित किया जा सकता है ?",
        answers: [
            { text: "ज्यामितीय माध्य", correct: false},
            { text: "हरात्मक माध्य", correct: false},
            { text: "माध्यिका", correct: true},
            { text: "बहुलक", correct: false},
        ] 
    },

    {
        question:"बारम्बारता बंटन में दाहिने ओर का निचला सिरा बायें ओर के निचले सिरे का प्रतिबिम्ब है। यह बंटन है",
        answers: [
            { text: "धनात्मक विषम", correct: false},
            { text: "असममित", correct: false},
            { text: "ऋणात्मक विषम", correct: true},
            { text: "सर्ममत", correct: false},
        ] 
    },

    {
        question:". अन्तर्वस्तु विश्लेषण का प्रकार इनमें से कौन-सा नहीं है ?",
        answers: [
            { text: "मूल्य विश्लेषण", correct: false},
            { text: "श्रेणी विश्लेषण", correct: true},
            { text: "प्रयोजन अनुक्रम विश्लेषण", correct: false},
            { text: "प्रतिकात्मक विश्लेषण", correct: false},
        ] 
    },

    {
        question:"व्यापारिक माध्य के प्रकार",
        answers: [
            { text: "चल माध्य", correct: false},
            { text: "प्रगतिशील माध्य", correct: false},
            { text: "संग्रहित माध्य", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"दो चरों के बीच कार्य-कारण सम्बन्ध को ज्ञात करना क्या कहलाता है ?",
        answers: [
            { text: "सम्बन्ध", correct: false},
            { text: "अपकिरण", correct: false},
            { text: "गुणांक", correct: false},
            { text: "सहसम्बन्ध", correct: true},
        ] 
    },

    {
        question:"विज्ञान का आरंभ व अंत किस पद्धति के अन्तर्गत आते हैं ?",
        answers: [
            { text: "ऐतिहासिक पद्धति", correct: false},
            { text: "संख्यात्मक पद्धति", correct: false},
            { text: "निरीक्षण पद्धति", correct: true},
            { text: "आगमन पद्धति", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से निरीक्षण की विशेषताओं का चयन कीजिए ",
        answers: [
            { text: "प्रत्यक्ष अध्ययन", correct: true},
            { text: "अप्रत्यक्ष अध्ययन", correct: false},
            { text: "सत्यापन की सुविधा नहीं", correct: false},
            { text: "उद्देश्यपूर्ण एवं सुक्ष्म अध्ययन", correct: false},
        ] 
    },

    {
        question:"सहभागी प्रेक्षण को 'क्षेत्रीय कार्य' कहना, किस विज्ञान की देन है ?",
        answers: [
            { text: "वनस्पतिशास्त्र की", correct: false},
            { text: "प्राणी विज्ञान की", correct: false},
            { text: "भू-विज्ञान की", correct: false},
            { text: "सभी की", correct: true},
        ] 
    },

    {
        question:"सहभागी निरीक्षण का प्रयोग सबसे पहले किस वर्ष में किया गया है ?",
        answers: [
            { text: "वर्ष 1924 में", correct: true},
            { text: "वर्ष 1946 में", correct: false},
            { text: "वर्ष 1952 में", correct: false},
            { text: "वर्ष 1901 में", correct: false},
        ] 
    },

    {
        question:"'पद्धतिशास्त्र' का आशय किस पद्धति से है ?",
        answers: [
            { text: "अध्ययन", correct: true},
            { text: "विश्लेषण", correct: false},
            { text: "वर्गीकरण", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन पुरूषार्थ की अवधारणा से संबंधित नहीं है ?",
        answers: [
            { text: "धर्म और अर्थ", correct: false},
            { text: "काम और मोक्ष", correct: false},
            { text: "काया", correct: true},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"आर्थिक स्वतंत्रता की दिशा में गाँधीजी ने किस सिद्धांत को अस्वीकार कर दिया है ?",
        answers: [
            { text: "शारीरिक श्रम", correct: false},
            { text: "आवश्यकता को संयमित करना", correct: false},
            { text: "साम्यवादी सिद्धांत", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"भारतीय गाँवों की सामाजिक संरचना का अध्ययन करने वाले प्रमुख विद्वान है -",
        answers: [
            { text: "श्याम चरण दुबे", correct: true},
            { text: "विक्टर डिसूजा", correct: false},
            { text: "टी. के. ओमन", correct: false},
            { text: "बाई. सिंह", correct: false},
        ] 
    },

    {
        question:"सत्य के मार्ग पर आने वाली बाधाओं और यातनाओं को सहन करना क्या कहलाता है ?",
        answers: [
            { text: "सत्याग्रह", correct: true},
            { text: "सर्वोदय", correct: false},
            { text: "अहिंसा", correct: false},
            { text: "समाजवाद", correct: false},
        ] 
    },

    {
        question:"गाँधीजी के 'सामान्य हित का सिद्धान्त' क्या है ?",
        answers: [
            { text: "नियम पालन का सिद्धान्त", correct: false},
            { text: "न्यायिता का सिद्धान्त", correct: false},
            { text: "सामाजिक न्याय का सिद्धान्त", correct: false},
            { text: "अस्तेय का सिद्धान्त", correct: true},
        ] 
    },

    {
        question:"जनसंख्या की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है ?",
        answers: [
            { text: "मध्य प्रदेश", correct: true},
            { text: "पंजाब", correct: false},
            { text: "बिहार", correct: false},
            { text: "केरल", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन वर्ण-व्यवस्था के प्रबल आलोचक थे ?",
        answers: [
            { text: "बी. आर. अंबेडकर", correct: true},
            { text: "जवाहरलाल नेहरू", correct: false},
            { text: "सुभाषचन्द्र बोस", correct: false},
            { text: "बाल गंगाधर तिलक", correct: false},
        ] 
    },

    {
        question:"किसी भी संस्कृति का केन्द्र बिन्दू और उसकी प्रकृति क्या है ?",
        answers: [
            { text: "वस्तु", correct: false},
            { text: "समाज", correct: false},
            { text: "मूल्य", correct: true},
            { text: "व्यक्ति", correct: false},
        ] 
    },

    {
        question:"संस्कृतिकरण की अवधारणा में भारतीय समाज में किस प्रकार की परिवर्तन होते हैं ?",
        answers: [
            { text: "संरचनात्मक", correct: false},
            { text: "पदमूलक", correct: false},
            { text: "गतिशील", correct: false},
            { text: "परम्परागत", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने 'सोशल स्ट्रक्चर ऑफ वैल्यूज' पुस्तक लिखी थी ?",
        answers: [
            { text: "एस. एन. श्रीनिवास", correct: false},
            { text: "ऑक्सर लुईस", correct: false},
            { text: "राधाकमल मुखर्जी", correct: true},
            { text: "रामकृष्ण मुखर्जी", correct: false},
        ] 
    },

    {
        question:"'ऑल इंडिया सोशियोलॉजिकल कान्फ्रेंस' नामक संघ की स्थापना आर. एन. सक्सेना की प्रेरणा से कब हुई ?",
        answers: [
            { text: "1951", correct: false},
            { text: "1955", correct: false},
            { text: "1956", correct: true},
            { text: "1957", correct: false},
        ] 
    },

    {
        question:"'हमारा समाज एक संगठनात्म्क समाज है।' यह किसका कथन है ?",
        answers: [
            { text: "ए. इलजानीय", correct: true},
            { text: "आर. डहल", correct: false},
            { text: "मैक्स वेबर", correct: false},
            { text: "एफ. हंटर", correct: false},
        ] 
    },

    {
        question:"अनुसूचित जातियों का आरक्षण इस अनुपात में किया जाता है -",
        answers: [
            { text: "सामाजिक पिछड़ापन", correct: false},
            { text: "आर्थिक आवश्यकताएँ", correct: false},
            { text: "जनसंख्या", correct: true},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:"प्रजाति मिश्रण और अनमेल विवाह को जाति की उत्पत्ति के लिए उत्तरदायी मानने वाले विद्वान है-",
        answers: [
            { text: "रिजले", correct: true},
            { text: "हो वार्ट", correct: false},
            { text: "सेनार्ट", correct: false},
            { text: "स्लेटर", correct: false},
        ] 
    },

    {
        question:"घुरिये का जन्म किस वर्ष में हुआ ?",
        answers: [
            { text: "1994", correct: false},
            { text: "1894", correct: false},
            { text: "1893", correct: true},
            { text: "1993", correct: false},
        ] 
    },

    {
        question:"प्रारम्भिक अन्तः क्रियावादी क्रिमको मस्तिष्क से भिन्न है ?",
        answers: [
            { text: "मन", correct: true},
            { text: "विचार", correct: false},
            { text: "संकेत", correct: false},
            { text: "अर्थ", correct: false},
        ] 
    },

    {
        question:"सामाजिक परिवर्तन का परिचायक निम्न में से कौन नहीं है ?",
        answers: [
            { text: "सामाजिक संबंधों में परिवर्तन", correct: true},
            { text: "युवा वर्ग प्रशिक्षित होना", correct: false},
            { text: "मंत्रिमंडल में परिवर्तन", correct: false},
            { text: "शिखा में परिवर्तन", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित किस जाति में पिता की सम्पत्ति सभी पुत्रों को विरासत में नहीं मिलती थी ?",
        answers: [
            { text: "नायर", correct: false},
            { text: "काडार", correct: false},
            { text: "नम्बूदरी", correct: true},
            { text: "नडार", correct: false},
        ] 
    },

    {
        question:"आत्म के विकास में मीड ने कितने स्तर बताए हैं?",
        answers: [
            { text: "एक", correct: false},
            { text: "दो", correct: false},
            { text: "तीन", correct: true},
            { text: "चार", correct: false},
        ] 
    },

    {
        question:"गारफिंकेल की पुस्तक 'स्टडीज इन एथनोमैथडोलॉजी' कब प्रकाशित हुई ?",
        answers: [
            { text: "वर्ष 1966", correct: false},
            { text: "वर्ष 1967", correct: true},
            { text: "वर्ष 1968", correct: false},
            { text: "वर्ष 1969", correct: false},
        ] 
    },

    {
        question:"गॉफमैन की निम्नलिखित में से कौन-सी कृति नहीं है?",
        answers: [
            { text: "स्टिग्मा", correct: false},
            { text: "पब्लिक", correct: false},
            { text: "रिलेशन", correct: false},
            { text: "इनमें से कोई नहीं", correct: true},
        ] 
    },

    {
        question:"दुर्खीम ने समाज के वर्गीकरण को निम्नलिखित में से किस रूप में किया था ?",
        answers: [
            { text: "यांत्रिक और सावयी", correct: false},
            { text: "गेमाइनशाफ्ट और गेजेलशाफ्ट            ", correct: true},
            { text: "विकृत और सांवृत", correct: false},
            { text: "विकृत और सांवृत", correct: false},
        ] 
    },

    {
        question:"किस मानवविज्ञानी ने समाजशास्त्रीय सिद्धान्त में नृविज्ञान को एक वैश्विक अनुशासन माना है ?",
        answers: [
            { text: "हेबरमास", correct: false},
            { text: "कैसेल्स", correct: false},
            { text: "दुर्खीम", correct: false},
            { text: "गीर्ट्ज", correct: true},
        ] 
    },

    {
        question:"सामाजिक संरचना की अवधारणा का उल्लेख सबसे पहले किन विद्वानों द्वारा किया गया -",
        answers: [
            { text: "स्पेन्सर एवं दुर्खीम", correct: true},
            { text: "मैकाइव एवं पेज", correct: false},
            { text: "आगवर्न एवं निमकॉफ", correct: false},
            { text: "गिलिन एवं गिलिन", correct: false},
        ] 
    },

    {
        question:"मीड के कृति में सम्पूर्ण समुदाय की मनोवृत्ति अथवा किसी खेल में पूरी टीम की मनोवृत्ति को निम्न में से क्या पद कहा जाता है ?",
        answers: [
            { text: "आत्म प्रत्यक्षण", correct: false},
            { text: "सामान्यीकृत अन्य", correct: true},
            { text: "सामाजिक कृत्य", correct: false},
            { text: "केन्द्रीय उद्दोपन", correct: false},
        ] 
    },

    {
        question:"माइनाइजेशन ऑफ इंडिया ट्रेडिशन नामक पुस्तक के लेखक कौन हैं?",
        answers: [
            { text: "योगेन्द्र सिन्हा", correct: false},
            { text: "गिलिन", correct: false},
            { text: "मैकाइवर", correct: true},
            { text: "श्रीनिवास", correct: false},
        ] 
    },

    {
        question:"स्टडीज इन एथनोमैथडोलोजी' पुस्तक किसने लिखी ?",
        answers: [
            { text: "गॉफमैन", correct: false},
            { text: "एच गारफिकेल", correct: true},
            { text: "पीटर बर्गर", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"नाडेल की सामाजिक संरचना की परिभाषा में मूल अवधारणा कौन सी है ?",
        answers: [
            { text: "संगठन", correct: false},
            { text: "भूमिका", correct: true},
            { text: "सम्बन्ध", correct: false},
            { text: "परिस्थिति", correct: false},
        ] 
    },

    {
        question:"सांस्कृतिक तत्वों के प्रकार्यों पर किस विद्वान ने विशेष बल दिया है ?",
        answers: [
            { text: "रेडिक्लिफ ब्राउन", correct: false},
            { text: "बी. मैलिनोवस्की", correct: true},
            { text: "जॉनसन", correct: false},
            { text: "इमाइल दुर्खीम", correct: false},
        ] 
    },

    {
        question:"आर. के. मर्टन के अनुसार प्रकार्य शब्द का प्रयोग किया जा सकता है ?",
        answers: [
            { text: "तीन अर्थों में", correct: false},
            { text: "चार अर्थों में", correct: false},
            { text: "पाँच अर्थों में", correct: true},
            { text: "छ: अर्थों में", correct: false},
        ] 
    },

    {
        question:"टालकॉट पारसन्स समाजशास्त्री निम्न में से किस लिए जाने जाते हैं ?",
        answers: [
            { text: "सामाजिक क्रिया", correct: false},
            { text: "प्रकार्यवाद", correct: false},
            { text: "संरचनात्मक क्रियात्मकता", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'स्ट्रक्चरल एन्थ्रोपोलॉजी' किसकी पुस्तक है ?",
        answers: [
            { text: "लेवी स्ट्रास", correct: true},
            { text: "नाडेल", correct: false},
            { text: "ब्राउन", correct: false},
            { text: "स्पेन्सर", correct: false},
        ] 
    },

    {
        question:"संरचनात्मक उपागम के अंतर्गत किसका विश्लेषण किया जाता है ?",
        answers: [
            { text: "व्यक्तियों का", correct: false},
            { text: "भूमिकाओं का", correct: false},
            { text: "परिस्थितियों का", correct: false},
            { text: "सभी का", correct: true},
        ] 
    },

    {
        question:"मैलिनोवस्की की पुस्तक 'साइंटिफिक थ्योरी ऑफ कल्चर' का प्रकाशन हुआ ?",
        answers: [
            { text: "1944", correct: false},
            { text: "1964", correct: false},
            { text: "1954", correct: true},
            { text: "1974", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 