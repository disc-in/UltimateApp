import React from 'react';
import { render, cleanup, waitFor } from 'react-native-testing-library';
import nock from 'nock';

import VimeoVideo from './VimeoVideo';

describe('<VimeoVideo />', () => {
  const VIMEO_VIDEO_ID = '407999139';

  it('loads the video', async () => {
    const scope = nock('https://player.vimeo.com:443', { encodedQueryParams: true })
      .get('/video/407999139/config')
      .delay(500)
      .reply(
        200,
        [
          '1f8b0800000000000203aa564a4ec98b2f2dca51b252ca28292928b6d2d74fd32bcbcc4dcd074ae825e7e72ae92881b9f189059950854016440954be28b5b034b5b844c90a000000ffff02000000ffffec59db6ee33812fd1701f36659bc930ad0d899879d0f18609f060d819762ac8e2c7974f124dbf07cfb16253b7692f5ae937de95ef443125b6415abea9cba50f99ac5ba8121bbfb9a053b6cd2df0176b6b72354769fdd8dfd04ab6c187bb05bdcf5fbd76cd7774924bba34aaeb23f26dbd4e3537697494176d92aab037e269e962023cb23a73e171e646ebdf0b90d2a501f3c101f706fdca14a4e0eab175ac5a556aece5aa9e222082079641ab56a4373cb99cf830da58eda0a03f29a56fd42ab6667ad8cb15252c3726b4d998b32a2d63296b9b75244c314f7cc5fd3cacb4badec2202c629418d16b9b456e542109e5b4755aea22f8d526500abafdafa22ae9498b3daa8a974e86cce88c310906872e3a8c99d32521bc18322e242ede755e6433ba36b1f62dd4355b723f4be6b5bf063f5c754fbb436f50deade8ce36eb82b0a4af8be0b8895dd8df51ed6f6c16e6dfd4f08eb16c6021e779fa8348612ad4afe97f5cda79fd8af264a0e914b84c6985c803579e974992bf052ba18c04885db7e62bffcb5d95aff8972e55d74c21390240447298a70a28ce2d17316158b18fd9209cb0cb1545912ace6d161dc4a47632c6e39b0402617fb3a40579c08b93a716875827d75426a758a6db1b5030669fd65e8dabf393b801218b67afc4431b25d5fdfd72d46ebde0ff8d5ee7df5237a3746ef80c4c4c5e6a91a1e9e121bdf72efb8b0ded75be890ba6bdf6d8b73c072f21828784d28b73c122c2c064b0a10e304275e9454032794a634f87619f2ddfb78383c7704ec11fe4757f8feba428068a766ac907e287fb53720d09b66b83214dca8e3470bfa78f26df9647e349d77c6ebffaecddcca82efd0ab43ea2558e3ee7b180664eebfe9257fd661c47b49a9c82adba267e8f072e8767751d456af104ee970a1f7a68c98e396a4427e0c653e8c219f065c23147f515996e94fca0b4174599658ebd3032d0c13a516748d462de922b53796696c4a25b3d859b4c6ac21360ae3b9a41807a9a9c62c015972230d5780e2d67147a5b6569be2aa3505a145b2a4a0aa78b6a27869c35275e7b29cfc7e5173b3ffb13fbfe2e106eafbcd98dda1a6b72dfb089e12df3a78d2507e06cff3d48c59d4da315906edb4e4cef912db36655e49c903d6413b37561218864b481782447435132e7e0cbc930d3783f78131e80a78a8e9ed6474048f623dffc6d12b355767f4b489c195a563985ede19c0733cd13638c9028e43c11b2fb9a781070015b91706518ed67245b9265c7c34f5161b6e46ef03e3e615f450d3db09f4889e60eadb074f9ec143e02282e41816210b582335106204e3a02dd781510f015cc02137c8e078f04a20a4c61ba208a625f93078f25de07d60aabf021e7b5d37f5b9e9d1927dfba927d8193d2c804e30a46ca991b42e46601681420a1310a50c985e383d101c0935501259749c44099c1a4939d3fac35d8fbd0bbd8fdc9eaec097541d3ee314d3d8f61e57a1c5c501dab17f7a3b77aa88a100a4b08f160f7246a2f71af953464f35913f2f82ebba2b282bb5920495416b5d036869b4cd30dfbbdc745f3d3f3d5dc6d2c3e4708b4621a332ebaa118671be79f94ddf6dc1e3e095be8dbdf50f677576b4f81425eefb6eda1d9f1fe65056bb1e22f4d07ab82a98f925a6f5303ce50d0cf9b69b9aba053b3d263cba297954f92e240efffa5b365f2967c555c4c50bbfecb079fbfc6c5772348d8bb3493df4d95d3b354d3aa27ba8a10a1d429ef059e6df34fce259237e1e46bb45f985fa5c971c55fa6a8e58b2df4dfe01c639c166ee35f609fa7c59c6e3',
          '306b9085c3dc2331e1fcd4a778248ffffe8fdf66ac31d7ba74b06024e20f782c572428cea5704270c90c8d860b594628018bd8d990ec64fd7cc5f648cfc421bacaf65d33a5a4a76b72c1dbc5df0d86261992ee7a5dba59a7c768a89bea26cc0e214ad0ce43c19aaa753ae5cb90c68535236b927c42560ecbce1e5cd74235af9f581a5fde2076c522587c198a93c0fa4bca81c4afaa4eb13dcb62a85a685e6ab02114c7b026911c45fa63d49269557abd74dbf9a9f42d27bce34cc47f1c4e41b8e190456c71112bd1e3d385d871ed996245525efb62deb7de8cdb0685b6d3e3ababd99bd3e0114b536b9b02f72e271dbda8b0dad73d66f26e1a87d75a962d39ec31cb87b7fe5e8a5e68f49ba97d78a7aa4526747fb64d67c30cf6a687ff469467afe6cdeb7e09d3b66e5fb968db3a26eebccfa614fbc4ed67f9943e7365c3b233547eb8055fdc559c85d64908d36daac37f740d49daedc662db8509c58a69ac9ba1485267e72e2cb9956817762c2a6ef6e048c324905ec6d6f7ad1da7f4a6030713c6702ac2f2c3080e44da18ad44949410271db6cb044363ef97fff8cdbd22911c12cad53c61a08e2d8c3655f7aa6bab4db7c7528b7bf0c461ae4d3bdb8fb54d050445ed34761b14c3028f75be9b9f1e9ecbfea9e2a7c9666e017e3e7703fbf9a5df266011fffd333ab07c485d6b4f9747cb8be55befa437de7e6e1cb36f7d4d7bcbe0f0f970f817000000ffff020820800094556d4fe33810fe2b553e97d629a550b4b7d21eaca0ec16ee38a8f60352e438d3c6d4b173b6d3174efcf79bb193b25a1dd22184eab1e7e599996726fda4567c0f366bac4ace5b61b0911598813055d24f36b200939cff936cc03a69341d45632d689f9ceb46a97ec2375c2a9e2b8817affda404b92af13d6567ac9f148de53e984efa892f9b2a77e4251d9d318c597a5fbbf3e150c6b0a2d0147918e20ecf4ef16f321e4f33d21e3cd72b84349d7cc00e955bb3c9f80366a8dc9ae5dcc1ffb64b3079b3d56029412e8469b4cffcbe260fe8480a74a87945e2dce47b9464b57adf7b6dacb75cfa61014bde28ef8e72d54036613bccaad6042f36aeb33f746ed838b0699a9e9c4e4e47698c938d761f0e958ed80effdb60b2c09e764e5fa33c66a7d3e9343d9ef613a8722832610acaef935c5accb4e7a557f0db5312a21d45863d253d67055e76607e255e5bd7836f34d8cac29768829d4129320cc5e3098921546e6c0116efe8862b65b64ba4a31316407ffef4348c803e631e011362fc4bea9582de175bf57ee7ba80a2f760a580baf747e3cade257632c30b1a0357720bd97bc53ee044cd8013cb341db1ae2235d84aba383d49dde42af06059e3181cb301aab91a0784a36f3c2bb9810c363fcf17a59295547b1cadf8a33836a47d6f3b96791394d8fba4f819676de5868b3dea71bdcf4d4164ccf735770e1dad81a0c2fe86c18f2ff24ede7c5ba47fcaef1737657e25489e3dbeccd25b79331da0d2737ea5b63f466a3d7b366c7e294eee1ed6bbf9cbdacdaac5585ccc26f387c7f1dde5d7ededcb8ccdafd9e06a21ad5a5e5fd86f3bdfac8f4ed9f7c5fdccd997afd777d5fdd57271799baeb7f78ff664f74814d74a3a8f752cb92b0f3b86084e53e6815799b17225754677992cda3aae219e7e99436d3484c58655c9782d33a124d073cc3ad6f4ed556a0f960b5a6051c5753a21721b6dcbbd2833c53d81628725c0e28ce04f655a5866b5c254244662af2d41c2b268bca97943bb06db4bf3e024e6ada3ecc07be46ad89b6fa40e4ff9fea045291fcc736ec3b9e53a9e845126627235c07fe04e5b9ec793e0e87815cf919f38da1511a4f3a62094c5c53cf5d26458a33609bce9564ac46656261cda8c09392f56d0e289fef12b022abc6d8c6a684dd2966971278c71a43a8d',
          '2fec3c7a166bbc4411833ae9a3275ed7a125745f35becdb2a06162fdee63d729607bbb5e42213d055972e580426a0a423340700715c786512dab18c634de1a1a666b2a4351428259685bc0ff7783d5f3fb03552cd79864fc6a866a983ae2a5b6a35564c346c236a61fe817c7f8ed6bfcfa2f000000ffff010000ffff7389dcca61250000',
        ],
        [
          'Connection',
          'close',
          'Content-Length',
          '2874',
          'Server',
          'nginx',
          'Content-Type',
          'application/json',
          'X-Xss-Protection',
          '1; mode=block',
          'X-Content-Type-Options',
          'nosniff',
          'Content-Encoding',
          'gzip',
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
          'P3p',
          'CP="This is not a P3P policy! See https://vimeo.com/privacy"',
          'Expires',
          'Tue, 28 Apr 2020 20:03:17 GMT',
          'Via',
          '1.1 varnish',
          'Cache-Control',
          'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          'X-Varnish-Cache',
          '1',
          'X-VServer',
          'infra-playproxy-a-11',
          'X-Vimeo-DC',
          'ge',
          'Accept-Ranges',
          'bytes',
          'Date',
          'Tue, 28 Apr 2020 19:56:33 GMT',
          'Via',
          '1.1 varnish',
          'Age',
          '0',
          'X-Served-By',
          'cache-cdg20749-CDG',
          'X-Cache',
          'MISS',
          'X-Cache-Hits',
          '0',
          'X-Timer',
          'S1588103793.331229,VS0,VE90',
          'Vary',
          'Origin, Accept-Encoding',
        ],
      );

    const { getByText, toJSON } = render(<VimeoVideo vimeoId={VIMEO_VIDEO_ID} />);

    expect(getByText('Loading...')).toBeDefined(); // Displayed by default

    await waitFor(() => scope.isDone());

    expect(getByText('Loading...')).toBeDefined(); // Displayed while buffering
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays a message on error', async () => {
    const scope = nock('https://player.vimeo.com')
      .get(`/video/${VIMEO_VIDEO_ID}/config`)
      .reply(404, {});

    const { getByText, toJSON } = render(<VimeoVideo vimeoId={VIMEO_VIDEO_ID} />);

    await waitFor(() => scope.isDone());

    await waitFor(() => getByText('Oopsie! There was an error loading the video...'));

    expect(toJSON()).toMatchSnapshot();
  });
});
