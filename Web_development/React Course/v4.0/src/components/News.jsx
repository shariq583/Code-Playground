import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  render() {
    let article = [
      {
        status: "ok",
        totalResults: 38,
        source: { id: "google-news", name: "Google News" },
        author: null,
        title:
          "LSG vs DC Highlights, IPL 2024: Delhi Capitals Break Lucknow Super Giants' Winning Streak With 6-Wic.. - NDTV Sports",
        description:
          "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
        url: "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9sc2ctdnMtZGMtbGl2ZS1zY29yZS10b2RheS0yNnRoLW1hdGNoLWluZGlhbi1wcmVtaWVyLWxlYWd1ZS0yMDI0LWx1Y2tub3ctc3VwZXItZ2lhbnRzLXZzLWRlbGhpLWNhcGl0YWxzLWxpdmUtZnJvbS1la2FuYS1zdGFkaXVtLTU0MjcwMjHSAa4BaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaXBsLTIwMjQvbHNnLXZzLWRjLWxpdmUtc2NvcmUtdG9kYXktMjZ0aC1tYXRjaC1pbmRpYW4tcHJlbWllci1sZWFndWUtMjAyNC1sdWNrbm93LXN1cGVyLWdpYW50cy12cy1kZWxoaS1jYXBpdGFscy1saXZlLWZyb20tZWthbmEtc3RhZGl1bS01NDI3MDIxL2FtcC8x",
        urlToImage:
          "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
        publishedAt: "2024-04-12T17:56:00Z",
        content: null,
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "NASA unveils Europa Clipper spacecraft set to assess life on Jupiter's icy moon | AFP - AFP News Agency",
        description:
          "Set for take-off in October and with ten years of space travel ahead of it, NASA's new Clipper spacecraft is unveiled in California. The five-billion-dollar ...",
        url: "https://www.youtube.com/watch?v=ZGyJs5VcG30",
        urlToImage: "https://i.ytimg.com/vi/ZGyJs5VcG30/maxresdefault.jpg",
        publishedAt: "2024-04-12T17:07:53Z",
        content: null,
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT News Desk",
        title:
          "PM Modi attacks opposition over ‘Constitution’ remark: ‘Even Ambedkar can’t…’ - Hindustan Times",
        description:
          "PM Modi hit out at the opposition for alleging that BJP will “change the Constitution of India” if they come to power after the upcoming elections. | Latest News India",
        url: "https://www.hindustantimes.com/india-news/pm-modi-attacks-opposition-over-constitution-remark-even-ambedkar-cant-101712934265917.html",
        urlToImage:
          "https://www.hindustantimes.com/ht-img/img/2024/04/12/1600x900/Prime-Minister-Narendra-Modi-addresses-a-public-ra_1712910273056_1712935890800.jpg",
        publishedAt: "2024-04-12T15:57:23Z",
        content:
          "Prime Minister Narendra Modi, while addressing a poll rally in Rajasthan on Friday, attacked the opposition parties for alleging that the BJP will change the Constitution if it wins the upcoming Lok … [+2319 chars]",
      },
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "Medicine Box | All You Need To Know About Prevent Noncommunicable Diseases | Rapid Fire | CNBC TV18 - CNBC-TV18",
        description:
          "What are the preventive steps you can take to avoid NCDs?Dr Hemant P Thacker, Internal Medicine Consultant at Sir HN Reliance Foundation Hospital & Research ...",
        url: "https://www.youtube.com/watch?v=DQL_t4XtpvM",
        urlToImage: "https://i.ytimg.com/vi/DQL_t4XtpvM/maxresdefault.jpg",
        publishedAt: "2024-04-12T15:39:49Z",
        content: null,
      },
      {
        source: { id: null, name: "Zee Business" },
        author: "ZeeBiz WebTeam",
        title:
          "TCS Q4 Results LIVE Updates: PAT meets expectations at Rs 12,434 crore, Tata group firm declares div - Zee Business",
        description:
          "TCS Q4 Results FY24 Live Updates: Tata group IT giant Tata Consultancy Services (TCS) reported its f",
        url: "https://www.zeebiz.com/companies/live-updates-tcs-q4-results-fy24-live-update-news-it-tata-consultancy-services-earnings-season-2024-share-price-nse-bse-profit-pat-attrition-deals-margin-dividend-stock-ceo-k-krithivasan-latest-conference-time-283866",
        urlToImage:
          "https://cdn.zeebiz.com/sites/default/files/2024/04/12/287725-tcscompanywebsite2.jpg",
        publishedAt: "2024-04-12T15:04:04Z",
        content:
          'Biswajit Maity, Senior Principal Analyst at Gartner, says that TCS showcased strong growth this year with profits going up.\r\n"One of its main strengths is how it focuses on its customers, building st… [+609 chars]',
      },
      {
        source: { id: null, name: "The Indian Express" },
        author: "The Indian Express",
        title:
          "Dozens of Palestinians killed in Gaza as Hamas official vows to ‘break’ Israel - The Indian Express",
        description: null,
        url: "https://indianexpress.com/article/world/palestinians-killed-gaza-hamas-official-vows-israel-9266547/",
        urlToImage: null,
        publishedAt: "2024-04-12T14:23:56Z",
        content: null,
      },
      {
        source: { id: null, name: "News18" },
        author: "S Aadeetya",
        title:
          "Infinix Note 40 Pro Series With MagSafe-Like Wireless Charging And Android 14 Launched: Price in India, Fea - News18",
        description:
          "Infinix Note 40 Pro models feature a curved AMOLED display, come with Android 14 out of the box and support wireless charging for Rs 21,999.",
        url: "https://www.news18.com/tech/infinix-40-pro-series-with-magsafe-like-wireless-charging-and-android-14-launched-price-in-india-features-8849027.html",
        urlToImage:
          "https://images.news18.com/ibnlive/uploads/2024/04/infinix-40-pro-launch-india-2024-04-8bbd250b572a085154cdb11892e4d2e5-16x9.jpg?impolicy=website&width=1200&height=675",
        publishedAt: "2024-04-12T14:23:35Z",
        content:
          "Infinix is recharging the mid-range phone segment in India with its new Note 40 Pro series that has two models for buyers. The company is going big with its new range of charging tech that includes w… [+1567 chars]",
      },
      {
        source: { id: null, name: "Livemint" },
        author: "Shashank Mattoo",
        title:
          "India warns citizens against travel to Iran and Israel | Mint - Mint",
        description:
          "Countries including France and the US have issued similar travel advisories for the region due to escalating tensions between Iran and Israel",
        url: "https://www.livemint.com/news/india-warns-citizens-against-travel-to-iran-and-israel-11712928968175.html",
        urlToImage:
          "https://www.livemint.com/lm-img/img/2024/04/12/1600x900/TOPSHOT-SYRIA-ISRAEL-CONFLICT-STRIKE-IRAN-0_1712930396483_1712930422698.jpg",
        publishedAt: "2024-04-12T14:03:37Z",
        content:
          "NEW DELHI : India on Friday issued an advisory, warning its citizens against travelling to Iran and Israel due to escalating tensions between the two West Asian nations. In view of the prevailing sit… [+2349 chars]",
      },
      {
        source: { id: null, name: "YourStory" },
        author: "YourStory",
        title:
          "Meta tests AI chatbot on WhatsApp, Instagram, Messenger in India and Africa - YourStory",
        description: null,
        url: "https://yourstory.com/2024/04/meta-ai-chatbot-on-whatsapp-instagram-messenger-in-india-africa",
        urlToImage: null,
        publishedAt: "2024-04-12T13:38:53Z",
        content: null,
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT News Desk",
        title:
          "Rahul Gandhi lambasts Modi govt in Tamil Nadu rally: ‘BJP will change Constitution if…' - Hindustan Times",
        description:
          "Congress leader Rahul Gandhi slammed the Modi government during his rally in Tamil Nadu, saying that the BJP will change the Constitution if they come to power. | Latest News India",
        url: "https://www.hindustantimes.com/india-news/rahul-gandhi-lambasts-modi-govt-in-tamil-nadu-rally-bjp-will-change-constitution-if-101712924429236.html",
        urlToImage:
          "https://www.hindustantimes.com/ht-img/img/2024/04/12/1600x900/FILES-INDIA-VOTE-ECONOMY-3_1712924785907_1712924810398.jpg",
        publishedAt: "2024-04-12T13:32:40Z",
        content:
          "Congress leader Rahul Gandhi slammed the Prime Minister Narendra Modi-led BJP government while addressing an election rally in Tamil Nadu on Friday, saying that if elected to power, the BJP will chan… [+2223 chars]",
      },
      {
        source: { id: null, name: "Koimoi" },
        author: "Trisha Gaur",
        title:
          "Bade Miyan Chote Miyan Day 1 Box Office: With 129.57% Higher Opening Day, Tiger Shroff Destroys His Last Eid Release Records! - Koimoi",
        description:
          "Tiger Shroff's Bade Miyan Chote Miyan has opened at the box office as per expectations, but much higher than his last Eid collection.",
        url: "https://www.koimoi.com/box-office/bade-miyan-chote-miyan-day-1-box-office-with-129-57-higher-opening-day-tiger-shroff-destroys-his-last-eid-release-records/",
        urlToImage:
          "https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/04/tiger-shroff-last-eid-release-001.jpg",
        publishedAt: "2024-04-12T13:30:32Z",
        content:
          "Tiger Shroff’s Bade Miyan Chote Miyan Box Office Opening Higher Than His Last Eid Release (Photo Credit Facebook)\r\nTiger Shroff is back in his action avatar as Bade Miyan Chote Miyan collects 16.07 c… [+2655 chars]",
      },
      {
        source: { id: null, name: "NDTV News" },
        author: null,
        title:
          "How Will UK Visa Changes Impact Indians? Former Students Weigh In - NDTV",
        description:
          "As part of Prime Minister Rishi Sunak's plan to control immigration numbers, the UK government on Thursday implemented an increase in the minimum income threshold required to sponsor a family member's visa in the country as a 'dependent'.",
        url: "https://www.ndtv.com/indians-abroad/how-will-uk-visa-changes-impact-indians-former-students-weigh-in-5427640",
        urlToImage:
          "https://c.ndtvimg.com/2023-07/hblgr79k_london-generic_625x300_05_July_23.jpg",
        publishedAt: "2024-04-12T13:16:19Z",
        content:
          "Indians represent a significant portion of non-EU immigration into the UK.\r\nAs part of Prime Minister Rishi Sunak's plan to control immigration numbers, the UK government on Thursday implemented an i… [+3290 chars]",
      },
      {
        source: { id: null, name: "Dneg.com" },
        author: "Caroline Bisson",
        title:
          "Superstar Yash Joins Namit Malhotra To Produce 'Ramayana' - DNEG",
        description:
          "DNEG CEO Namit Malhotra’s production company Prime Focus Studios and Yash’s Monster Mind Creations have joined forces to create the definitive version of Ramayana for global audiences.",
        url: "https://www.dneg.com/superstar-yash-joins-namit-malhotra-to-produce-ramayana/",
        urlToImage:
          "https://www.dneg.com/wp-content/uploads/2024/01/No50BlockImage-scaled.jpeg",
        publishedAt: "2024-04-12T12:09:22Z",
        content:
          "We are thrilled to share that Indian superstar actor-producer Yash (K.G.F: Chapter 2 – the fourth-highest grossing Indian film of all time) and his production company Monster Mind Creations are joini… [+1904 chars]",
      },
      {
        source: { id: null, name: "India Today" },
        author: "Daphne Clarance",
        title:
          "Whooping cough cases surge in China: Know symptoms, prevention - India Today",
        description:
          "Whooping cough is a respiratory infection that causes coughing fits In China the cases have now surged more than 20-fold in the first two months of 2024",
        url: "https://www.indiatoday.in/health/story/whooping-cough-cases-surge-in-china-know-symptoms-prevention-2526463-2024-04-12",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/young-asian-mother-putting-on-surgical-mask-for-little-daughter-before-heading-out-to-prevent-the-sp-124210778-16x9_0.jpg?VersionId=ovNGNXD0vdujBgWcYGsqiqIxAhqLWFDJ",
        publishedAt: "2024-04-12T12:01:59Z",
        content:
          "After the Covid-19 pandemic, whooping cough has made a comeback in China. \r\nThe cases have now surged more than 20-fold in the first two months of 2024, according to Bloomberg. \r\nThe country reported… [+2344 chars]",
      },
      {
        source: { id: null, name: "Ndtvprofit.com" },
        author: "Smriti Chaudhary",
        title:
          "GQG, Fidelity Investments Likely To Participate In Vodafone Idea's Rs 18000 Crore FPO - NDTV Profit",
        description:
          "Vodafone Idea has filed a red herring prospectus for its upcoming follow-on public offer to raise up to Rs 18,000 crore.",
        url: "https://www.ndtvprofit.com/business/gqg-fidelity-investments-likely-to-participate-in-vodafone-ideas-rs-18000-crore-fpo",
        urlToImage:
          "https://media.assettype.com/bloombergquint%2F2022-05%2Fd4be8da9-f74a-4c87-8f0d-7143b6dadc07%2FA_Vodafone_Idea_store_exterior___Photo_Snehal_Galbow_Source_BQ_Prime_.jpeg?rect=0%2C0%2C1280%2C672&w=320&h=180&auto=format%2Ccompress&ogImage=true",
        publishedAt: "2024-04-12T12:00:57Z",
        content:
          "Foreign investors GQG and Fidelity Investments are said to invest in Vodafone Idea Ltd. through the follow-on public offer, according to people familiar with the matter. Details of the investments in… [+1731 chars]",
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "Khushi Pal",
        title:
          "10 spectacular images of space captured by NASA telescopes - Hindustan Times",
        description:
          "Here are ten captivating photos of space captured by NASA telescopes.",
        url: "https://www.hindustantimes.com/web-stories/in-focus/10-spectacular-images-of-space-captured-by-nasa-telescopes-101712917595263.html",
        urlToImage: null,
        publishedAt: "2024-04-12T11:45:04Z",
        content:
          "By Khushi PalPublished Apr 12, 2024\r\nHindustan TimesIn FocusPhoto Credits: NASA",
      },
      {
        source: { id: "the-hindu", name: "The Hindu" },
        author: "The Hindu",
        title:
          "Indian consulate in Sittwe relocates staff in view of situation in Myanmar’s Rakhine state, says MEA - The Hindu",
        description: null,
        url: "https://www.thehindu.com/news/national/indian-consulate-in-sittwe-relocates-staff-in-view-of-situation-in-myanmars-rakhine-state-says-mea/article68057729.ece",
        urlToImage: null,
        publishedAt: "2024-04-12T11:34:00Z",
        content: null,
      },
      {
        source: { id: null, name: "MediaNama.com" },
        author: "Pragati Singh",
        title:
          "OpenAI Unveils GPT-4 Turbo with Vision, Empowering AI with Multimedia Analysis - MediaNama.com",
        description:
          "ChatGPT maker OpenAI has launched a Turbo version of the generative AI tool which can process multimedia inputs such as images and videos",
        url: "https://www.medianama.com/2024/04/223-openai-unveils-gpt-4-turbo-with-vision-empowering-ai-with-multimedia-analysis/",
        urlToImage:
          "https://www.medianama.com/wp-content/uploads/2024/02/levart_photographer-7q-kE4SZzvQ-unsplash-scaled.jpg",
        publishedAt: "2024-04-12T11:33:26Z",
        content:
          "Through a Twitter post, OpenAI announced a substantial enhancement to its latest artificial intelligence (AI) model, GPT-4 Turbo, introducing computer vision capabilities on April 9, according to an … [+2979 chars]",
      },
      {
        source: { id: null, name: "Hindustan Times" },
        author: "HT Entertainment Desk",
        title:
          "When Emraan Hashmi called Murder co-star Mallika Sherawat a bad kisser on Koffee With Karan - Hindustan Times",
        description:
          "Emraan Hashmi and Mallika Sherawat met after almost two decades yesterday at a bash. Asked about his 'worst on-screen kiss', Emraan had once named Mallika. | Bollywood",
        url: "https://www.hindustantimes.com/entertainment/bollywood/when-emraan-hashmi-called-murder-co-star-mallika-sherawat-bad-kisser-koffee-with-karan-101712918031551.html",
        urlToImage:
          "https://www.hindustantimes.com/ht-img/img/2024/04/12/1600x900/Emraan_kiss_Mallika_Murder_1712919117617_1712919134758.jpg",
        publishedAt: "2024-04-12T11:29:41Z",
        content:
          "Emraan Hashmi and Mallika Sherawat took the internet by storm as they reunited 20 years after their film 2004 film Murder at film producer Anand Pandits daughters wedding reception in Mumbai on Thurs… [+2238 chars]",
      },
      {
        source: { id: "al-jazeera-english", name: "Al Jazeera English" },
        author: "Al Jazeera",
        title:
          "Thailand’s top diplomat visits Myanmar border amid clashes, evacuations - Al Jazeera English",
        description:
          "Foreign Minister Parnpree arrives in Mae Sot to review measures to deal with people fleeing fighting across frontier.",
        url: "https://www.aljazeera.com/news/2024/4/12/thailands-top-diplomat-visits-myanmar-border-amid-clashes-evacuations",
        urlToImage:
          "https://www.aljazeera.com/wp-content/uploads/2024/04/AFP__20240412__34P73WB__v2__HighRes__ThailandMyanmarConflict-1712906319.jpg?resize=1920%2C1440",
        publishedAt: "2024-04-12T11:28:35Z",
        content:
          "Thailands foreign minister has visited a border town near Myanmar, the Ministry of Foreign Affairs said, after days of clashes in which the military governments troops were expelled by ethnic minorit… [+2509 chars]",
      },
    ];
    this.state = {
      article: article,
    };
    return (
      <div className="news ">
        <h2>Get The News!</h2>
        <h4 className="mx-3">
          Total Articles Found:{this.state.article[0].totalResults}
        </h4>
        <div className="row">
          {this.state.article.map((e) => {
            return (
              <div className="col md-4">
                <NewsItem
                  title={e.title.slice(0, 45) + "..."}
                  desc={e.description && e.description.slice(0, 88) + "..."}
                  imgUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
