import Image from "next/image";
import SectionContainer from "./components/SectionContainer";
import HeadingSection from "./components/HeadingSection";
import DescriptionTxt from "./components/DescriptionTxt";
import ImageShapeBox from "./components/ImageShapeBox";
import FooterSection from "./components/FooterSection";
import ServiceItem from "./components/ServiceItem";
import ImageServices from "./components/ImageServices";
import TextBoxService from "./components/TextBoxService";
import ProductsList from "./components/ProductsList";
import CompanyNameHeading from "./components/CompanyNameHeading";

import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

function Page() {
  return (
    <>
      <SectionContainer>
        <div className="relative h-[100dvh] object-cover">
          <Image src="/images/home.jpg" fill alt="home page picture" />
        </div>
      </SectionContainer>

      {/* section About */}
      <SectionContainer>
        {/* <ImageShapeBox /> */}
        <HeadingSection txtDir="rtl" type="primary">
          من نحن :
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="primary">
          تأسست <span className="text-red-500">قوة الإطفاء</span> في جدة -
          المملكة العربية السعودية، وهي من بين الشركات الرائدة في المملكة
          العربية السعودية التي تقدم خدمات ومنتجات أنظمة الحماية من الحرائق
          وأجهزة إنذار الحريق ومعدات مكافحة الحرائق وأنظمة هندسة الأمن
          والسلامه.... تمتلك شركة{" "}
          <span className="text-red-500">قوة الإطفاء</span> فريقاً من المهندسين
          والفنيين المدربين والمؤهلين بشكل احترافي يعملون على الافا بالتزامنا
          بتقديم خبرتنا لعملائنا في حماية الحياة والبيئة والممتلكات..
        </DescriptionTxt>

        <HeadingSection type="primary">About us</HeadingSection>
        <DescriptionTxt type="primary">
          <span className="text-red-500 uppercase">POWER OF</span> was
          established in Jeddah - Saudi Arabia, and is among the leading
          companies in Saudi Arabia that provide services and products for fire
          protection systems, fire alarms, firefighting equipment and security
          and safety engineering systems.{" "}
          <span className="text-red-500 uppercase">POWER OF</span> has a team of
          engineers and technicians, professionally trained and qualified,
          working on our commitment to providing our expertise to our customers
          in protecting life, the environment and property.
        </DescriptionTxt>

        <FooterSection />
      </SectionContainer>

      {/* section Vision */}
      <SectionContainer>
        <HeadingSection txtDir="rtl" type="primary">
          الرؤيه:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="primary">
          أن نكون شركة رائدة موثوقة في صناعة حماية الحياة والبيئة والممتلكات من
          خلال تقديم منتجات وخدمات عالية الجودة مع المسؤولية الأخلاقية والالتزام
          بالاحترافية.
        </DescriptionTxt>

        <HeadingSection txtDir="rtl" type="primary">
          المهمه:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="primary">
          تمكين العملاء من تأمين الحياة والبيئة والممتلكات والأعمال من خلال
          تقديم حلول ومعرفة حماية عالية الجودة ومبتكرة تحقيق رضا العملاء.
        </DescriptionTxt>

        <HeadingSection type="primary">Vision</HeadingSection>
        <DescriptionTxt type="primary">
          To be a trusted leader in the field of protecting life, environment
          and property by providing high quality products and services with
          ethical responsibility and commitment to professionalism.
        </DescriptionTxt>

        <HeadingSection type="primary">Mission</HeadingSection>
        <DescriptionTxt type="primary">
          Empowering customers to secure life, environment, property and
          business by providing high quality and innovative protection solutions
          and knowledge to achieve customer satisfaction
        </DescriptionTxt>

        <FooterSection />
      </SectionContainer>

      {/* section our core Values */}
      <SectionContainer>
        <div className="flex items-center justify-between ml-auto w-[60%] max-sm:w-[85%]">
          <HeadingSection type="primary">Our Core Values</HeadingSection>
          <HeadingSection type="primary" txtDir="rtl">
            قيمنا الاساسيه :
          </HeadingSection>
        </div>

        <HeadingSection txtDir="rtl" type="secondary">
          نزاهه:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          نحن نظهر باستمرار أعلى المعايير الأخلاقية في أعمالنا، ونحترم
          اتفاقياتنا ونكون صادقين في اتصالاتنا.
        </DescriptionTxt>

        <HeadingSection txtDir="rtl" type="secondary">
          جوده:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          باستخدام نظام إدارة الجودة، فإننا نلتزم بالفحص الصارم لمنتجاتنا
          وخدماتنا وسلاسل التوريد لدينا.
        </DescriptionTxt>

        <HeadingSection txtDir="rtl" type="secondary">
          العمل بروح الفريق الواحد:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          العمل كفريق يعزز قوة كل فرد لضمان تحقيق أهداف الشركة.
        </DescriptionTxt>

        <HeadingSection type="secondary">Integrity.</HeadingSection>
        <DescriptionTxt type="secondary">
          We consistently demonstrate the highest ethical standards in our
          business, honor our agreements and are honest in our communications.
        </DescriptionTxt>

        <HeadingSection type="secondary">Quality</HeadingSection>
        <DescriptionTxt type="secondary">
          Using a quality management services, we are committed to rigorously
          inspecting our products, systems and supply chains.
        </DescriptionTxt>

        <HeadingSection type="secondary">Work as a team.</HeadingSection>
        <DescriptionTxt type="secondary">
          Working as a team leverages the strength of each individual to ensure
          the company`&apos;`s goals are achieved..
        </DescriptionTxt>

        <FooterSection />
      </SectionContainer>

      {/*****/}
      <SectionContainer>
        <HeadingSection txtDir="rtl" type="secondary">
          التزام:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          نحن نشترك في هدف واحد وهو الالتزام القوي بالجودة والتميز والتحسين
          المستمر لحماية المزيد من الأرواح والأصول.
        </DescriptionTxt>

        <HeadingSection txtDir="rtl" type="secondary">
          ابتكار:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          نحن نسعى باستمرار إلى إيجاد طرق مبتكرة لتعزيز منتجاتنا وخدماتنا وتوفير
          القيمة لعملائنا.
        </DescriptionTxt>

        <HeadingSection txtDir="rtl" type="secondary">
          التركيز على العملاء:
        </HeadingSection>
        <DescriptionTxt txtDir="rtl" type="secondary">
          العميل هو جوهر عمل الشركة لذلك نتجاوز توقعات العملاء فيما يتعلق
          بالقيمة والخدمة ونبني علاقات العملاء ونحافظ عليها ونضمن رضاهم على
          المدى الطويل.
        </DescriptionTxt>

        <HeadingSection type="secondary">Commitment.</HeadingSection>
        <DescriptionTxt type="secondary">
          We share one goal, a strong commitment to quality, excellence and
          continuous improvement to protect more lives and assets.
        </DescriptionTxt>

        <HeadingSection type="secondary">Innovation.</HeadingSection>
        <DescriptionTxt type="secondary">
          We constantly seek innovative ways to enhance our products and
          services and provide value to our customers.
        </DescriptionTxt>

        <HeadingSection type="secondary">Customer Focus.</HeadingSection>
        <DescriptionTxt type="secondary">
          The customer is at the heart of the company`&apos;`s business, so we
          exceed customer expectations for value and service, build and maintain
          customer relationships and ensure long-term customer satisfaction.
        </DescriptionTxt>

        <FooterSection />
      </SectionContainer>

      {/* Section CEO message  */}
      <SectionContainer>
        <div className="relative h-72 bg-[url('/images/ceobackground.jpg')] bg-cover bg-center w-full">
          {/* <Image src="/images/ceobackground.jpg" alt="CEO image" fill /> */}
          <div className="absolute inset-0 bg-red-800 bg-opacity-85"></div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] max-md:grid-cols-1 gap-4 mx-10 max-sm:mx-4 -mt-[152px]">
          <div className=" h-fit py-2 px-1 z-10">
            <div className="bg-gray-200">
              <HeadingSection txtDir="rtl" type="secondary">
                رساله المدير التنفيذى :
              </HeadingSection>
              <DescriptionTxt txtDir="rtl" type="secondary">
                جعل بيئتكم أكثر أماناً هو أكثر من مجرد شعار، إنه أسلوب حياة قوة
                الإطفاء، إن حمايتكم وحماية الممتلكات الخاصة بكم وجعلها آمنة هو
                عملنا قوة الإطفاء معروفة كشركة رائدة في مجال السلامة من الحرائق،
                بقيمنا الأساسية النزاهة والجودة والتزام والعمل بروح الفريق
                الواحد، والابتكار، والتركيز على العملاء.
              </DescriptionTxt>
            </div>

            <DescriptionTxt txtDir="rtl" type="secondary">
              مع ثقتكم ودعمكم المتواصل لنا، فإن شركة قوة الإطفاء تسعى جاهدة
              لتمكين عملائنا من تأمين الحياة والبيئة والممتلكات والأعمال من خلال
              تقديم حلول ومعرفة حماية عالية الجودة ومبتكرة تحقيق رضا العملاء، من
              خلال فريق عمل متوافق وفاعل لضمان تحقيق أهداف الشركة.
            </DescriptionTxt>

            <HeadingSection type="secondary">CEO Message</HeadingSection>
            <DescriptionTxt type="secondary">
              Making your environment safer is more than just a slogan, it is a
              way of life for POWEROF, protecting you and your property and
              making it safe is our job, POWEROF is known as a leader in fire
              safety industry, with our core values of integrity, quality,
              commitment, teamwork, and innovation. And customer focus. With
              your trust and continued support for us, POWEROF strives to
              empower our customers to secure life, environment, property and
              business by providing high quality and innovative protection
              solutions and knowledge to achieve customer satisfaction, through
              a compatible and effective work team to achieve our company’s
              mission.
            </DescriptionTxt>
          </div>

          <div className="relative h-[30rem] w-full max-md:hidden">
            <Image src="/images/ceo.jpg" alt="CEO image" fill />
            <div class="absolute inset-0 bg-red-700 bg-opacity-70"></div>
          </div>
        </div>

        <FooterSection />
      </SectionContainer>

      {/*******/}
      <SectionContainer>
        {/* <div className="relative h-screen">
          <Image
            fill
            src="/images/safer.jpg"
            className="h-screen object-cover"
            alt="we make your environment safer"
          />
        </div> */}

        <div className="relative h-[100dvh] object-cover">
          <Image
            src="/images/safer.jpg"
            fill
            alt="we make your environment safer"
          />
        </div>
      </SectionContainer>

      {/* Section Approvals  */}

      {/* Section Brands  */}
      {/* <div className="flex items-center justify-between ml-auto">
        <HeadingSection type="primary">Brands</HeadingSection>
        <HeadingSection type="primary" txtDir="rtl">
          العلامات التجاريه :
        </HeadingSection>
      </div> */}

      {/* Section Services  */}
      <SectionContainer>
        <div className="flex items-center justify-between ml-auto">
          <HeadingSection type="primary">Services</HeadingSection>
          <HeadingSection type="primary" txtDir="rtl">
            الخدمات:
          </HeadingSection>
        </div>

        <div className="mx-20 mt-12 flex flex-col gap-16 max-md:mx-10 max-sm:mx-4">
          <ServiceItem margin="right">
            <TextBoxService
              type="primary"
              headingArab="عقود الصيانه الدوريه الوقائيه"
              headingEng="Periodic Preventive
Maintenance Contracts"
            />
            <ImageServices src="/images/services1.jpg" />
          </ServiceItem>

          <ServiceItem margin="left">
            <ImageServices src="/images/services2.jpg" />
            <TextBoxService
              type="primary"
              headingArab="المشاريع والمقاولات"
              headingEng="Projects and Contracting"
            />
          </ServiceItem>

          <ServiceItem margin="right">
            <TextBoxService
              type="primary"
              headingArab="الخدمات الهندسيه"
              headingEng="Engineering Services"
            />
            <ImageServices src="/images/services3.jpg" />
          </ServiceItem>
        </div>

        <FooterSection />
      </SectionContainer>

      {/* Products Section */}
      <SectionContainer>
        <div className="flex items-center justify-between ml-auto">
          <HeadingSection type="primary">Products</HeadingSection>
          <HeadingSection type="primary" txtDir="rtl">
            المنتجات:
          </HeadingSection>
        </div>

        <ProductsList />

        <FooterSection />
      </SectionContainer>

      {/* Footer */}

      <footer className="relative">
        <div className="relative h-[100dvh] object-center bg-[url('/images/footer.jpg')] bg-cover bg-center w-full flex flex-col justify-end">
          {/* <Image src="/images/footer.jpg" fill alt="footer picture" /> */}
          <div className="absolute inset-0 bg-red-800 bg-opacity-85"></div>

          <div className=" flex max-md:flex-col items-center max-md:items-start justify-between gap-1 max-md:gap-4 mx-28 max-xl:mx-12 max-lg:mx-4 mb-20 max-md:mb-2 z-10">
            {/* address box */}
            <div className="relative px-4  py-1 rounded-md bg-red-700 shadow-sm pr-10">
              <p
                dir="rtl"
                className="text-white text-base max-lg:text-xs font-semibold"
              >
                Al-Madinah Al-Munawarah Rd 2368 طريق المدينه المنوره
              </p>
              <p
                dir="rtl"
                className="text-white text-base max-lg:text-xs font-semibold"
              >
                Hilal Ibn Umayyah Ash Sharafiyah هلال بن اميه - حى الشرقيه
              </p>
              <p
                dir="rtl"
                className="text-white text-base max-lg:text-xs font-semibold"
              >
                Dist. Second Floor Office Number 29 الطابق الثانى مكتب رقم
              </p>

              {/* icon */}
              <div className="absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] icon-footer flex items-center justify-center p-1 border border-white bg-yellow-500">
                <CiGlobe className="w-5 h-5" color="white" />
              </div>
            </div>

            <div className="relative px-4 py-1 rounded-md bg-red-700 shadow-sm pr-10">
              <p className="text-white text-lg font-semibold max-lg:text-sm mb-2">
                sales@powerof.sa
              </p>
              <p className="text-white text-lg font-semibold max-lg:text-sm">
                www.powerof.sa
              </p>

              {/* icon */}
              <div className="absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] icon-footer flex items-center justify-center p-1 border border-white bg-yellow-500">
                <IoLocationOutline className="w-5 h-5" color="white" />
              </div>
            </div>

            <div className="relative px-4 py-1 rounded-md bg-red-700 shadow-sm pr-10">
              <p className="text-white text-lg font-semibold mb-2 max-lg:text-sm">
                050 991 60 60
              </p>
              <p className="text-white text-lg font-semibold max-lg:text-sm">
                053 599 60 60
              </p>

              {/* icon */}
              <div className="absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] icon-footer flex items-center justify-center p-1 border border-white bg-yellow-500">
                <LuPhoneCall className="w-5 h-5" color="white" />
              </div>
            </div>
          </div>
        </div>

        <CompanyNameHeading />

        {/* <FooterAdresses>
          <Adress
            icon={
              <IconFooter>
                <IoLocationOutline />
              </IconFooter>
            }
          >
            <p dir="rtl" className="text-sm text-black mb-2">
              المدينه المنوره طريق 2368 Al-Madinah Al-Munawarah Rd 2368
            </p>
            <p className="text-sm text-primary mb-2"></p>
            <p className="text-sm text-primary mb-2"></p>
          </Adress>
          <Adress
            icon={
              <IconFooter>
                <CiGlobe />
              </IconFooter>
            }
          ></Adress>
          <Adress
            icon={
              <IconFooter>
                <LuPhoneCall />
              </IconFooter>
            }
          ></Adress>
        </FooterAdresses> */}
      </footer>
    </>
  );
}

export default Page;
