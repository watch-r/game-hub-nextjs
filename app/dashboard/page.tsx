import { Container } from "@radix-ui/themes";
import TextOverImageComponent from "../games/[id]/_components/TextOverImageComponent";
import Image from "next/image";
import WhereToBuy from "../games/[id]/_components/WhereToBuy";
import VideoSlide from "../games/[id]/_components/VideoSlide";
import { fetchGameMovies } from "../lib/data";

const DashboardPage = async () => {
    const movies = await fetchGameMovies('3498')
    console.log(movies)
    return (
        <Container>
            {/* /public/icons/metascore.svg */}
            <div>
                <Image
                    src="/icons/EarlyChildhood.svg"
                    width={300}
                    height={200}
                    alt=""
                />
                <Image
                    src="/icons/EveryOne.svg"
                    width={300}
                    height={200}
                    alt=""
                />
            </div>
            {/* <WhereToBuy /> */}
            <Container className=""></Container>
            <VideoSlide/>
            <TextOverImageComponent url={"/stock_image.jpeg"} name="Hola" />
            {/* <Heading size={'6'}>Lorem ipsum dolor sit amet.</Heading> */}
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                molestias quasi explicabo consequuntur perferendis aliquam
                facere placeat obcaecati, porro natus excepturi provident
                corrupti. Ullam similique veritatis, dolore consequatur
                aspernatur, fuga quod perferendis eaque tenetur nulla,
                repellendus unde. Blanditiis esse dolorum amet aperiam
                recusandae nulla quia voluptatem unde officiis, rerum
                consequuntur cum eum tempora. Labore praesentium omnis deleniti
                dolores quas, soluta numquam aliquid animi dicta adipisci
                assumenda eos dolorum officiis nemo excepturi. Adipisci ut,
                autem laboriosam eligendi at, ipsam omnis earum perferendis,
                alias officiis temporibus impedit molestias quidem quibusdam.
                Nemo, beatae eius excepturi, debitis a, minus placeat dicta
                atque omnis iusto laboriosam consequatur. Architecto, cumque. Ad
                alias non consequatur eaque ipsum veniam delectus quia expedita
                tempora blanditiis in, minus odit odio, quibusdam, totam
                corporis sunt vitae? Repellat laudantium laboriosam itaque iste
                distinctio ullam aperiam quae eos quidem nam magnam aspernatur
                quibusdam magni, doloribus exercitationem, consequuntur suscipit
                corrupti. Veniam pariatur molestiae reiciendis excepturi dolorem
                quasi quidem dolorum ratione praesentium esse, nihil nobis
                ducimus autem aliquam perferendis assumenda adipisci commodi
                omnis quo illum. Pariatur dignissimos fuga, debitis minima
                quisquam itaque natus ex vel totam aliquam laudantium eligendi
                at cumque molestiae deserunt nisi beatae odio nemo. Nulla
                obcaecati provident exercitationem aliquid autem, in dicta unde
                sunt corrupti delectus ut animi inventore repellat laboriosam
                perspiciatis nihil neque rerum qui ipsam molestiae ducimus odio
                natus quas eligendi. Magnam, quos dignissimos quae error saepe
                quas! Doloribus corrupti nostrum rem obcaecati eos atque
                molestias, delectus quaerat eligendi tempora, unde quo
                cupiditate expedita excepturi dolore reprehenderit numquam
                doloremque rerum laudantium? Earum numquam, voluptas, sunt
                voluptatibus laborum quisquam eos expedita, deleniti placeat
                quia nobis necessitatibus suscipit a sed maiores eaque porro
                obcaecati consequuntur rem minus. Consequuntur quos perspiciatis
                praesentium, quisquam nihil, ut corporis provident nam tempore
                perferendis repellendus corrupti explicabo hic consequatur
                eligendi voluptas. Expedita consequuntur suscipit dolorem ullam
                quas asperiores, impedit debitis ex similique officia
                necessitatibus consectetur nihil numquam repudiandae voluptates
                laborum libero, natus exercitationem? Voluptatem tenetur
                necessitatibus at id nihil laudantium quod sit fugiat molestiae
                minima, veritatis ullam repudiandae obcaecati, excepturi dicta
                error voluptates animi et ipsam. Saepe iure labore eveniet odio
                tempore maiores voluptate facilis, ullam vel quae veniam cum
                laudantium. Consectetur ducimus aperiam doloremque blanditiis
                totam quisquam delectus veniam laborum ratione fugiat voluptatum
                nihil magni animi, possimus ipsa sit debitis voluptatibus ea
                ullam maxime! Dignissimos sed saepe vero iure quaerat expedita
                reprehenderit, aut distinctio a officia nisi unde tempore
                dolorem delectus facilis sit in sapiente deleniti laboriosam
                porro inventore ex excepturi, soluta corporis. Velit incidunt
                nesciunt natus accusamus delectus, sapiente, similique odit
                repudiandae dicta facilis eos, ut neque necessitatibus quis
                nostrum impedit nulla! Ea saepe itaque maxime iure nobis cum,
                quod voluptas. Corporis quibusdam laboriosam eius aspernatur!
                Ipsam debitis, autem quasi unde in cum, magni fugiat rem saepe
                esse eaque id. Quo nemo magnam harum accusantium facilis alias,
                voluptate necessitatibus natus fugit fuga iste magni, similique
                facere quos, dolorum suscipit repudiandae sequi delectus
                voluptates dignissimos quas a eligendi ipsam? Quod assumenda
                iure excepturi consequuntur vel sit nobis vero nihil rem,
                debitis voluptatum sint eveniet blanditiis veritatis minima
                minus. Libero saepe dolorum perspiciatis ipsum, earum cum
                inventore nobis odio, dolore voluptate sint, magnam maxime sed
                nulla omnis in sapiente eaque ullam repellendus quae eligendi!
                Perspiciatis beatae amet non officiis earum vitae aut incidunt,
                ipsam enim, praesentium in cumque doloribus accusamus placeat
                tempore, harum nisi laborum rerum blanditiis a cupiditate
                inventore odit sunt magnam! Saepe beatae est molestias,
                voluptatibus eum aperiam explicabo possimus natus quidem illo,
                exercitationem qui! Natus, fugiat iste itaque provident
                architecto quos. Similique est quia autem nulla, impedit ea
                rerum aspernatur libero repellendus eos voluptatibus
                reprehenderit. Vitae libero perspiciatis consequuntur deserunt
                doloribus reprehenderit eius suscipit esse dolor error, amet,
                harum a quam aspernatur facere facilis, adipisci accusantium
                ipsa aut voluptatum. Aspernatur tempora minus, voluptate alias
                maiores delectus! Iusto ad unde sunt, itaque doloribus
                architecto vitae totam consequatur laudantium incidunt quam
                recusandae veniam minima! Dolor odio ratione officiis magnam
                voluptatum quam dolorum neque, dolorem vero cupiditate,
                consectetur aliquam omnis delectus, maxime beatae maiores atque
                corporis adipisci ipsum explicabo fugit repudiandae eos! Maxime
                aperiam amet, odit, voluptate nisi ullam placeat cum repudiandae
                temporibus itaque explicabo nobis ex quia, delectus soluta sed
                quod! Corrupti expedita ipsam sequi, quod in voluptatem, impedit
                nulla quo, ut omnis eveniet nemo mollitia esse ea? Fuga sed
                pariatur, ad magnam aut assumenda perferendis ipsam quos
                repudiandae quas recusandae ipsa! Molestiae mollitia fugiat
                eaque, odio vitae ipsa ad, est iste quo sunt veniam corporis,
                temporibus culpa cumque. Architecto hic soluta, doloribus
                doloremque delectus veniam corrupti quisquam cumque numquam
                velit laudantium aliquam facere aut ad officiis, mollitia autem
                accusamus excepturi temporibus, praesentium molestiae labore?
                Porro cupiditate iste numquam mollitia fugit. Tenetur, magni
                laudantium. Magnam, iusto? Sunt quibusdam exercitationem ullam
                officiis nam amet dolore, dignissimos, ratione maxime
                consectetur labore, magni tempore sapiente? Corrupti, quia
                tempore! Eum ducimus modi, quidem delectus blanditiis facere
                temporibus cumque porro, at dolorem sunt provident, dolore
                doloremque ea eius. Aperiam velit porro, incidunt, error,
                laborum ab amet deserunt sint officiis suscipit totam fugit
                inventore possimus doloremque ipsum ex atque voluptatem!
                Nesciunt beatae corrupti debitis placeat doloremque est incidunt
                repellat rerum laborum natus dolorem repellendus exercitationem
                voluptatibus sint quos molestiae repudiandae illum fugiat,
                aliquid deleniti. Nesciunt odit minima autem quisquam neque
                molestiae sunt illo error quia accusantium necessitatibus nisi
                debitis perferendis velit obcaecati, unde quis atque ipsam
                maxime distinctio corrupti, deleniti in. Ipsam unde fugiat nihil
                sint consequatur sequi esse laborum dolor voluptate doloribus id
                eius quam, odio labore, illo a facere error? Temporibus
                quibusdam ratione minima nobis consectetur iure tempora
                distinctio, debitis reiciendis, eaque, earum qui est labore
                cupiditate eos recusandae! Harum quam eum aut quidem consequatur
                culpa soluta sed quod, vitae doloremque iste nesciunt quas
                commodi repellat accusantium saepe excepturi, dicta animi natus,
                obcaecati delectus numquam facere nostrum! Veniam quod,
                laudantium aperiam error, nulla ad, saepe reprehenderit iste
                maxime tenetur itaque dolores alias? Natus libero doloremque
                consectetur perspiciatis repudiandae labore recusandae ducimus
                dolorem neque adipisci? Dolore molestiae excepturi laborum alias
                nemo numquam, cupiditate mollitia culpa et voluptatem totam
                accusamus? Debitis quia magnam optio quisquam aliquam doloremque
                error voluptates expedita autem? Consequatur?
            </div>
        </Container>
    );
};

export default DashboardPage;
// <div className="fixed overflow-hidden">
{
    /* <Image
src={"/stock_image.jpeg"}
alt="Image of ..."
fill
objectFit="cover"
className="imggggg"
/>
</div> */
}
