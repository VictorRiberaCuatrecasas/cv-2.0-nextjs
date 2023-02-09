import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sample_body">
          <h1>{router.locale}</h1>
          <h2>{t('test')}</h2>
           <div>
            <h3>With Link</h3>
            <h1>Choose your locale: </h1>

            {router.locales?.map((l) => (
              <h4 key={l}>
                <Link href={`/`} locale={l}>
                  {l}
                </Link>
              </h4>
            ))}
          </div>

        </div>
        <div className="noise-container"></div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
