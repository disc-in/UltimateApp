import React from 'react';
import { render, fireEvent, cleanup, waitForElement, act } from 'react-native-testing-library';
import nock from 'nock';

import VimeoVideo from './VimeoVideo';

afterEach(cleanup);

describe('<VimeoVideo />', () => {
  const VIMEO_VIDEO_ID = '407999139';
  const screenWidth = 480;

  it('loads the video', async () => {
    const scope = nock('https://player.vimeo.com')
      .get(`/video/${VIMEO_VIDEO_ID}/config`)
      .reply(200, [
        '1f8b0800000000000203aa564a4ec98b2f2dca51b252ca28292928b6d2d74fd32bcbcc4dcd074ae825e7e72ae92881b9f189059950854016440954be28b5b034b5b844c90a000000ffff00631d9ce27b2266696c6573223a7b2264617368223a7b2273657061726174655f6176223a747275652c2273747265616d73223a5b7b2270726f66696c65223a3136352c227175616c697479223a2235343070222c226964223a2230633139653566322d663331632d346365352d616334632d616436643163646365306364222c22667073223a33307d2c7b2270726f66696c65223a3136342c227175616c697479223a2233363070222c226964223a2231363334643465302d663237632d343738312d613332632d646164393766376134386535222c22667073223a33307d2c7b2270726f66696c65223a3137342c227175616c697479223a2237323070222c226964223a2232323239353138322d616138392d343966312d613966392d636135346638323633633263222c22667073223a33307d2c7b2270726f66696c65223a3133392c227175616c697479223a2232343070222c226964223a2238623634313837342d356161362d343430332d616231362d366663393836363964656137222c22667073223a33307d2c7b2270726f66696c65223a3137352c227175616c697479223a223130383070222c226964223a2266373135623937662d323062632d343066382d386231382d623638353738343364363034222c22667073223a33307d5d2c2263646e73223a7b22616b666972655f696e746572636f6e6e6563745f71756963223a7b2275726c223a2268747470733a2f2f313033766f642d61646170746976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324638663533656633352d663238382d346561382d396237392d3665633535626664653835362532462532417e686d61633d353831313433626438666162396233303465363635636461323766323866663239343665663665656662643333386232313531643062333164383664396631302f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6a736f6e3f6261736536345f696e69743d31222c226f726967696e223a22676373222c226176635f75726c223a2268747470733a2f2f313033766f642d61646170746976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324638663533656633352d663238382d346561382d396237392d3665633535626664653835362532462532417e686d61633d353831313433626438666162396233303465363635636461323766323866663239343665663665656662643333386232313531643062333164383664396631302f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6a736f6e3f6261736536345f696e69743d31227d2c22666173746c795f736b7966697265223a7b2275726c223a2268747470733a2f2f736b79666972652e76696d656f63646e2e636f6d2f313538373831373339372d3078363462333465313566333465323066356230663234383739663337613462373265313366636234382f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f306331',
        '39653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6a736f6e3f6261736536345f696e69743d31222c226f726967696e223a22676373222c226176635f75726c223a2268747470733a2f2f736b79666972652e76696d656f63646e2e636f6d2f313538373831373339372d3078363462333465313566333465323066356230663234383739663337613462373265313366636234382f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6a736f6e3f6261736536345f696e69743d31227d7d2c2273747265616d735f617663223a5b7b2270726f66696c65223a3136352c227175616c697479223a2235343070222c226964223a2230633139653566322d663331632d346365352d616334632d616436643163646365306364222c22667073223a33307d2c7b2270726f66696c65223a3136342c227175616c697479223a2233363070222c226964223a2231363334643465302d663237632d343738312d613332632d646164393766376134386535222c22667073223a33307d2c7b2270726f66696c65223a3137342c227175616c697479223a2237323070222c226964223a2232323239353138322d616138392d343966312d613966392d636135346638323633633263222c22667073223a33307d2c7b2270726f66696c65223a3133392c227175616c697479223a2232343070222c226964223a2238623634313837342d356161362d343430332d616231362d366663393836363964656137222c22667073223a33307d2c7b2270726f66696c65223a3137352c227175616c697479223a223130383070222c226964223a2266373135623937662d323062632d343066382d386231382d623638353738343364363034222c22667073223a33307d5d2c2264656661756c745f63646e223a22616b666972655f696e746572636f6e6e6563745f71756963227d2c22686c73223a7b2273657061726174655f6176223a747275652c2264656661756c745f63646e223a22616b666972655f696e746572636f6e6e6563745f71756963222c2263646e73223a7b22616b666972655f696e746572636f6e6e6563745f71756963223a7b2275726c223a2268747470733a2f2f313033766f642d61646170746976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324638663533656633352d663238382d346561382d396237392d3665633535626664653835362532462532417e686d61633d353831313433626438666162396233303465363635636461323766323866663239343665663665656662643333386232313531643062333164383664396631302f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6d337538222c226f726967696e223a22676373222c226176635f75726c223a2268747470733a2f2f313033766f642d61646170746976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324638663533656633352d663238382d346561382d396237392d3665633535626664653835362532462532417e686d61633d35383131343362643866616239623330346536363563646132376632386666323934366566366565666264333338623231353164306233316438366439',
        '6631302f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6d337538227d2c22666173746c795f736b7966697265223a7b2275726c223a2268747470733a2f2f736b79666972652e76696d656f63646e2e636f6d2f313538373831373339372d3078363462333465313566333465323066356230663234383739663337613462373265313366636234382f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6d337538222c226f726967696e223a22676373222c226176635f75726c223a2268747470733a2f2f736b79666972652e76696d656f63646e2e636f6d2f313538373831373339372d3078363462333465313566333465323066356230663234383739663337613462373265313366636234382f38663533656633352d663238382d346561382d396237392d3665633535626664653835362f7365702f766964656f2f30633139653566322c31363334643465302c32323239353138322c38623634313837342c66373135623937662f6d61737465722e6d337538227d7d7d2c2270726f6772657373697665223a5b7b2270726f66696c65223a3136352c227769647468223a3936302c226d696d65223a22766964656f2f6d7034222c22667073223a33302c2275726c223a2268747470733a2f2f766f642d70726f67726573736976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324676696d656f2d70726f642d736b79666972652d7374642d75732532463031253246313539392532463136253246343037393939313339253246313734383234393734312e6d70347e686d61633d363665626639323139336237376564633136333163303762303063623134643635666664333165356639626433663364336230396661616133353661343736352f76696d656f2d70726f642d736b79666972652d7374642d75732f30312f313539392f31362f3430373939393133392f313734383234393734312e6d7034222c2263646e223a22616b616d61695f696e746572636f6e6e656374222c227175616c697479223a2235343070222c226964223a2230633139653566322d663331632d346365352d616334632d616436643163646365306364222c226f726967696e223a22676373222c22686569676874223a3534307d2c7b2270726f66696c65223a3136342c227769647468223a3634302c226d696d65223a22766964656f2f6d7034222c22667073223a33302c2275726c223a2268747470733a2f2f766f642d70726f67726573736976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324676696d656f2d70726f642d736b79666972652d7374642d75732532463031253246313539392532463136253246343037393939313339253246313734383234353831332e6d70347e686d61633d393765383331393265613666346234663439306163383065313533663566343938396161346537646235323238393930383762613163356666386536646132612f76696d656f2d70726f642d736b79666972652d7374642d75732f30312f313539392f31362f3430373939393133392f313734383234353831332e6d7034222c2263646e223a22616b616d61695f696e746572636f6e6e656374222c227175616c697479223a223336307022',
        '2c226964223a2231363334643465302d663237632d343738312d613332632d646164393766376134386535222c226f726967696e223a22676373222c22686569676874223a3336307d2c7b2270726f66696c65223a3137342c227769647468223a313238302c226d696d65223a22766964656f2f6d7034222c22667073223a33302c2275726c223a2268747470733a2f2f766f642d70726f67726573736976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324676696d656f2d70726f642d736b79666972652d7374642d75732532463031253246313539392532463136253246343037393939313339253246313734383234393733362e6d70347e686d61633d393933623531323061643731343736353337356430613137383132663836636565643736323734666366303464313763633732393739333738323832663463312f76696d656f2d70726f642d736b79666972652d7374642d75732f30312f313539392f31362f3430373939393133392f313734383234393733362e6d7034222c2263646e223a22616b616d61695f696e746572636f6e6e656374222c227175616c697479223a2237323070222c226964223a2232323239353138322d616138392d343966312d613966392d636135346638323633633263222c226f726967696e223a22676373222c22686569676874223a3732307d2c7b2270726f66696c65223a3133392c227769647468223a3432362c226d696d65223a22766964656f2f6d7034222c22667073223a33302c2275726c223a2268747470733a2f2f766f642d70726f67726573736976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324676696d656f2d70726f642d736b79666972652d7374642d75732532463031253246313539392532463136253246343037393939313339253246313734383234393733352e6d70347e686d61633d663862626336393263663236656330363031643333363566643034343264356234623736323338326432353531633163663761323331633633616634633764302f76696d656f2d70726f642d736b79666972652d7374642d75732f30312f313539392f31362f3430373939393133392f313734383234393733352e6d7034222c2263646e223a22616b616d61695f696e746572636f6e6e656374222c227175616c697479223a2232343070222c226964223a2238623634313837342d356161362d343430332d616231362d366663393836363964656137222c226f726967696e223a22676373222c22686569676874223a3234307d2c7b2270726f66696c65223a3137352c227769647468223a313932302c226d696d65223a22766964656f2f6d7034222c22667073223a33302c2275726c223a2268747470733a2f2f766f642d70726f67726573736976652e616b616d61697a65642e6e65742f6578703d313538373831373339377e61636c3d25324676696d656f2d70726f642d736b79666972652d7374642d75732532463031253246313539392532463136253246343037393939313339253246313734383234393734322e6d70347e686d61633d346233353364623466643639306364326565343037323230306137366166343834613365383537613038633938396664373665666638663261306662633663382f76696d656f2d70726f642d736b79666972652d7374642d75732f30312f313539392f31362f3430373939393133392f313734383234393734322e6d7034222c2263646e223a22616b616d61695f696e746572636f6e6e656374222c227175616c697479223a223130383070222c226964223a2266373135623937662d323062632d343066382d386231382d6236',
        '38353738343364363034222c226f726967696e223a22676373222c22686569676874223a313038307d5d7d2c226c616e67223a22656e222c2273656e747279223a7b2275726c223a2268747470733a2f2f36663566386531636563666134306662383530663537386236396663313730354073656e7472792e696f2f31323937363530222c22656e61626c6564223a747275652c2264656275675f656e61626c6564223a747275652c2264656275675f696e74656e74223a307d2c2261625f7465737473223a7b226368726f6d6563617374223a7b22747261636b223a66616c73652c2264617461223a7b7d2c2267726f7570223a66616c73657d2c2263646e5f707265666572656e6365223a7b22747261636b223a66616c73652c2264617461223a7b2263697479223a22697373792d6c65732d6d6f756c696e65617578222c22636f756e7472795f636f6465223a224652222c22686c735f707265665f666f756e64223a66616c73652c22646173685f707265665f666f756e64223a66616c73657d2c2267726f7570223a747275657d7d2c227265666572726572223a6e756c6c2c22636f6f6b69655f646f6d61696e223a222e76696d656f2e636f6d222c2274696d657374616d70223a313538373831333439372c2267635f6465627567223a7b226275636b6574223a2276696d656f2d706c617965722d6465627567227d2c2265787069726573223a333630302c2263757272656e6379223a22455552222c2273657373696f6e223a226565336336313035323563393835656137356366396535313766623431636164356433343931373831353837383133343937222c22636f6f6b6965223a7b227363616c696e67223a312c22766f6c756d65223a312e302c227175616c697479223a6e756c6c2c226864223a302c2263617074696f6e73223a6e756c6c7d2c226275696c64223a7b226261636b656e64223a22312e31362e33222c226a73223a22332e32302e30227d2c2275726c73223a7b2262617265626f6e655f6a73223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6a732f62617265626f6e652e6a73222c22746573745f696d70223a2268747470733a2f2f667265736e656c2e76696d656f63646e2e636f6d2f6164642f706c617965722d746573742d696d7072657373696f6e222c226a735f62617365223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6a732f222c22667265736e656c223a2268747470733a2f2f667265736e656c2e76696d656f63646e2e636f6d2f6164642f706c617965722d7374617473222c226a73223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6a732f706c617965722e6a73222c2270726f7879223a2268747470733a2f2f706c617965722e76696d656f2e636f6d2f7374617469632f70726f78792e68746d6c222c226d75785f75726c223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f65787465726e616c2f6d75782e6a73222c22667265736e656c5f6d696d69725f696e707574735f75726c223a2268747470733a2f2f667265736e656c2d6576656e74732e76696d656f63646e2e636f6d2f6164642f6d696d69725f696e70757473222c22667265736e656c5f6368756e6b5f75726c223a2268747470733a2f2f667265736e656c2d6576656e74732e76696d656f63646e2e636f6d2f6164642f6368756e6b5f646f776e6c6f616473222c2274687265655f6a73223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f65787465726e616c2f74687265652e7276696d656f2e6d696e2e6a73222c22667265736e656c5f6d616e69',
        '666573745f75726c223a2268747470733a2f2f667265736e656c2d6576656e74732e76696d656f63646e2e636f6d2f6164642f706c61796261636b5f6d616e6966657374222c226368726f6d656c6573735f637373223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6373732f6368726f6d656c6573732e637373222c22767569645f6a73223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f6a735f6f70742f6d6f64756c65732f7574696c732f767569642e6d696e2e6a73222c226368726f6d656c6573735f6a73223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6a732f6368726f6d656c6573732e6a73222c22637373223a2268747470733a2f2f662e76696d656f63646e2e636f6d2f702f332e32302e302f6373732f706c617965722e637373227d2c227369676e6174757265223a226262313537626539303266643863343063636436666334323066343033343931222c22666c616773223a7b22646e74223a302c227072656c6f61645f766964656f223a226d657461646174615f6f6e5f686f766572222c22706c617973223a312c227061727469616c73223a302c226175746f686964655f636f6e74726f6c73223a307d2c22636f756e747279223a224652222c2266696c655f636f64656373223a7b2268657663223a7b22686472223a5b5d2c22736472223a5b5d7d2c22617631223a5b5d2c22617663223a5b2230633139653566322d663331632d346365352d616334632d616436643163646365306364222c2231363334643465302d663237632d343738312d613332632d646164393766376134386535222c2232323239353138322d616138392d343966312d613966392d636135346638323633633263222c2238623634313837342d356161362d343430332d616231362d366663393836363964656137222c2266373135623937662d323062632d343066382d386231382d623638353738343364363034225d7d7d94556d4fe33810fe2b553e77dba49496a2bd9538107bed5de156070b2b21454e324d4c1d3b6b3b69d313fffd66eca4ac5687b408a17aec797966e699c930a8046b41c7b516c179278c1a5e821aa5aa0c8641c33350c1f9bf4103da7025e998d65a83b4c1b9ac851806ac615cb04480bf78190605f0bcc0f7283c0b8741566b669de96c18d8a22e13435ea2c95988310b6b2b733e1e731f36cd24451ebbb8e3b339fecda6d3454cdaa3e72a47488bd93bec50b9339b4ddf6186ca9d59c20cfcb25d80c9ab9d044d09b23455b5b4b16d2bf2808e788a0e252b495caba4458997f9dbde2ba5ad66dc8e33d8b05a58f3211135c4b3708f595592e0f9c6f5f6c7ce8d6b033a8aa2d3f96c3e897c9c78b27f77a86812eef1bf0bc633ec69eff4c5cbd370be582ca293c5308032812c4e5546f97de41b8d990e2cb7027e7b0a5cb40f9e614fc1c0e8142f7b303f13afabebd1371aec78660b34c1cea0e41986e2c98c44172a513a038d7774c38450bb0dd2d1a41a407efaf834f6803e611e0e1362fc87cb5cc0e0429783df99cc201bdc699e4235f8bb36c5e00a3b19e3058d81299886f8ad621f71a2a6c389655a4cc2be2215e8921b3f3d415527c2f16053e1189c84235433150e0843df7816bc81189a1fe78b52890baa3d8e96ff110c1bd2bd771d8bad724ae1dba4f81167a579c3d216f5986c1395111993b662c6a0a32d10546857213c5ef05bbefaf36bf485ff75b92a92cf29c9cbfbc332bae1abc508959e93cf62f73811dbe5b30ad757e9e9eddd76bf3e6ccdb2fc3a4d2f97b3f5ddfdf4e690ef6f0e17edfa8f70f4707db75d4cc44a6ee5d9e4cb43f3fcfdf256aafde3b7b393ab07b63dbd9f5ecfaf77f52189a9',
        '50b514dc58ac63c14c71dc3144709a320bac8c95e6399731ddc53cebeab8057ffa690ea592e0161b562566158f53c1819e7dd6bea6afaf5c5ad02ca505e6554cafe32277d176cca6452c982550e17109847e46f0a7541d2c95e7980ac748e14b4710b72c6aab2a56d3aec1f6d23c188e794b2f1bb016b9eaf6e62ba9dd53d21eb528e5a379c2b43b775cc753aa84f2984c05f03fb8a38ee7fe9432749cfbb3e7278e764904e9bd097065313e4fb95131d6a84b026ffa95e2b1a95cb94397312167590e1d1eef1fbf2220dc5ba3444d6b92b64c873b08438654a7f185bd45cfe9162f51c4a0865bef8955956b09dd97b5edb2cc6898c261ffb1eb15b0bd7d2f21e396826c983040212505a11920b8a39261c3a896a50fa36aab150db356a5a2282ec1d8b5cde1ff5e63f56c7ba48a661293f45f4d570d5579bcd476b4f26c6838ec7cfa8e7e7e8c5fbfc62fff010000ffff010000ffffdf6953a560250000',
      ]);

    const { getByText, toJSON } = render(<VimeoVideo vimeoId={VIMEO_VIDEO_ID} screenWidth={screenWidth} />);

    expect(getByText('Loading...')).toBeDefined(); // Displayed by default

    await act(async () => {
      await waitForElement(() => scope.isDone());
    });

    expect(getByText('Loading...')).toBeDefined(); // Displayed while buffering
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays a message on error', async () => {
    const scope = nock('https://player.vimeo.com')
      .get(`/video/${VIMEO_VIDEO_ID}/config`)
      .reply(404);

    const { getByText, toJSON } = render(<VimeoVideo vimeoId={VIMEO_VIDEO_ID} screenWidth={screenWidth} />);

    await act(async () => {
      await waitForElement(() => scope.isDone());
    });

    await act(async () => {
      await waitForElement(() => getByText('Oopsie! There was an error loading the video...'));
    });
    expect(toJSON()).toMatchSnapshot();
  });
});
