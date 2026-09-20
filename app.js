const hasConfig=()=>window.SUPABASE_URL&&window.SUPABASE_ANON_KEY;
let sb=null;

if(hasConfig()&&window.supabase){
  sb=window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY
  );
}

const TABS=[
  ['home','🏠','ホーム'],
  ['gift','🎁','ギフト'],
  ['pref','📍','都道府県'],
  ['mbti','🧠','MBTI'],
  ['zodiac','⭐','星座'],
  ['origift','🎨','オリギフ'],
  ['custom','✨','カスタム'],
  ['settings','⚙️','設定']
];

const PREF=[
  '北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県',
  '茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',
  '新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県',
  '静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県',
  '奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県',
  '徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
  '熊本県','大分県','宮崎県','鹿児島県','沖縄県'
];

const MBTI=[
  'INTJ','INTP','ENTJ','ENTP',
  'INFJ','INFP','ENFJ','ENFP',
  'ISTJ','ISFJ','ESTJ','ESFJ',
  'ISTP','ISFP','ESTP','ESFP'
];

const ZODIAC=[
  'おひつじ座','おうし座','ふたご座','かに座',
  'しし座','おとめ座','てんびん座','さそり座',
  'いて座','やぎ座','みずがめ座','うお座'
];

const OFFICIAL_GIFTS=[
  {name:'ええやん',coin:5,group:'文字系'},
  {name:'かわいい',coin:5,group:'文字系',variant:'blue'},
  {name:'GOD',coin:5,group:'文字系'},
  {name:'すやぴっぴ',coin:5,group:'文字系'},
  {name:'うれピーナッツ',coin:5,group:'文字系'},
  {name:'祝',coin:5,group:'文字系'},
  {name:'神回',coin:5,group:'文字系'},
  {name:'笑',coin:5,group:'文字系'},
  {name:'わかりみ',coin:5,group:'文字系'},
  {name:'うんうん',coin:5,group:'文字系'},
  {name:'草',coin:5,group:'文字系'},
  {name:'ｗｗ',coin:5,group:'文字系'},
  {name:'最高',coin:5,group:'文字系'},
  {name:'さすが',coin:5,group:'文字系'},
  {name:'えっ？',coin:5,group:'文字系'},
  {name:'NOT OK',coin:5,group:'文字系'},
  {name:'OK',coin:5,group:'文字系'},
  {name:'！？',coin:5,group:'文字系'},
  {name:'？',coin:5,group:'文字系'},
  {name:'かわいい♡',coin:5,group:'文字系',variant:'pink'},
  {name:'天才かよ',coin:5,group:'文字系'},
  {name:'たしカニ',coin:5,group:'文字系'},
  {name:'乙',coin:5,group:'文字系'},

  {name:'ハート',coin:5,group:'かわいい系'},
  {name:'おめでとう',coin:5,group:'かわいい系'},
  {name:'花束',coin:5,group:'かわいい系'},
  {name:'ペンライト(3本)',coin:5,group:'かわいい系'},
  {name:'ペンライト',coin:5,group:'かわいい系'},
  {name:'プレゼントボックス',coin:5,group:'かわいい系'},
  {name:'クリームソーダ',coin:5,group:'かわいい系'},
  {name:'音符',coin:5,group:'かわいい系'},
  {name:'バラ',coin:5,group:'かわいい系'},
  {name:'つぼみのバラ',coin:5,group:'かわいい系'},

  {name:'パチパチ(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},
  {name:'おなかすいた(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},
  {name:'ごろ寝(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},
  {name:'チルい(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},
  {name:'もぐもぐ(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},
  {name:'わかる(アヴィエル)',coin:5,group:'Avvyケモず系',mascot:'アヴィエル'},

  {name:'ショック！(でんきゅいぬ)',coin:5,group:'Avvyケモず系',mascot:'でんきゅいぬ'},
  {name:'嬉しい！(でんきゅいぬ)',coin:5,group:'Avvyケモず系',mascot:'でんきゅいぬ'},
  {name:'いいね(でんきゅいぬ)',coin:5,group:'Avvyケモず系',mascot:'でんきゅいぬ'},
  {name:'充電中(でんきゅいぬ)',coin:5,group:'Avvyケモず系',mascot:'でんきゅいぬ'},
  {name:'おはよう！(でんきゅいぬ)',coin:5,group:'Avvyケモず系',mascot:'でんきゅいぬ'},

  {name:'カチコチ(げるくま)',coin:5,group:'Avvyケモず系',mascot:'げるくま'},
  {name:'溶けちゃう(げるくま)',coin:5,group:'Avvyケモず系',mascot:'げるくま'},
  {name:'ただいま～(げるくま)',coin:5,group:'Avvyケモず系',mascot:'げるくま'},
  {name:'頑張れ(げるくま)',coin:5,group:'Avvyケモず系',mascot:'げるくま'},
  {name:'Big Thanks(げるくま)',coin:5,group:'Avvyケモず系',mascot:'げるくま'},

  {name:'しょぼぼーん(ヨルワール)',coin:5,group:'Avvyケモず系',mascot:'ヨルワール'},
  {name:'ごゆっくり(ヨルワール)',coin:5,group:'Avvyケモず系',mascot:'ヨルワール'},
  {name:'お大事に(ヨルワール)',coin:5,group:'Avvyケモず系',mascot:'ヨルワール'},
  {name:'いいね(ヨルワール)',coin:5,group:'Avvyケモず系',mascot:'ヨルワール'},
  {name:'おやすみ(ヨルワール)',coin:5,group:'Avvyケモず系',mascot:'ヨルワール'},

  {name:'照れ照れ(クロル)',coin:5,group:'Avvyケモず系',mascot:'クロル'},
  {name:'かまって(クロル)',coin:5,group:'Avvyケモず系',mascot:'クロル'},
  {name:'ありがとう(クロル)',coin:5,group:'Avvyケモず系',mascot:'クロル'},
  {name:'またね(クロル)',coin:5,group:'Avvyケモず系',mascot:'クロル'},

  {name:'推し(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},
  {name:'たすかる(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},
  {name:'たましい(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},
  {name:'メラメラ(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},
  {name:'心配(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},
  {name:'おかえり(ウパめろ)',coin:5,group:'Avvyケモず系',mascot:'ウパめろ'},

  {name:'お茶',coin:50},
  {name:'アイスクリーム',coin:50},
  {name:'ミニケーキ',coin:50},

  {name:'ハート風船',coin:100},
  {name:'ペンライト振り',coin:100},

  {name:'乾杯',coin:200},
  {name:'キラキラ',coin:200},

  {name:'ドドド',coin:300},
  {name:'集中線',coin:300},

  {name:'尊い',coin:500},

  {name:'ハートラッシュ！(クロル)',coin:1000},
  {name:'ケモずファンファーレ',coin:1000},
  {name:'ビッグハートクッション',coin:1000},

  {name:'レインボーステージ',coin:2000},
  {name:'花火セレナーデ',coin:2000},

  {name:'100本のバラ',coin:5000}
];

const EVENT_GIFTS={
  '弾けるフルーツポップ':[
    {name:'フルーツキャンディ',coin:5},
    {name:'レコード',coin:5},
    {name:'ソーダ',coin:5},
    {name:'フルーツペンライト',coin:5},
    {name:'フルーツポンチ',coin:50}
  ],

  'ストリートジャック':[
    {name:'LOL(ネオン)',coin:5},
    {name:'ハート(ネオン)',coin:5},
    {name:'音符(ネオン)',coin:5},
    {name:'エナジードリンク(ネオン)',coin:5},
    {name:"Let's Go！",coin:50}
  ],

  '真夏のアメリカンダイナー':[
    {name:'フライドポテト',coin:5},
    {name:'コーラ',coin:5},
    {name:'Cool',coin:5},
    {name:'アイスキャンディー',coin:5},
    {name:'ストロベリーシェイク',coin:50}
  ],

  '夜空に響く祭囃子':[
    {name:'風車',coin:5},
    {name:'金魚',coin:5},
    {name:'ラムネ',coin:5},
    {name:'線香花火',coin:5},
    {name:'ドンッ！',coin:50}
  ],

  'チャイナバラエティ':[
    {name:'福',coin:5},
    {name:'扇',coin:5},
    {name:'チャーハン',coin:5},
    {name:'麻雀牌',coin:5},
    {name:'パンダまん',coin:50}
  ]
};

const EVENT_KEYS=Object.keys(EVENT_GIFTS);

let state={
  tab:'home',
  user:null,
  authUserId:null,
  appUser:null,
  appUserId:null,
  profile:null,

  gifts:[],
  giftCounts:{},
  itemCounts:{},

  customProjects:[],
  customItems:{},

  eventSettings:{},
  eventGiftSettings:{},
  giftTargets:{},

  themeMode:'light',
  accentColor:'#e98f8f',

  loading:true
};

const $=s=>document.querySelector(s);

const esc=s=>String(s??'').replace(
  /[&<>"']/g,
  m=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[m])
);

function toast(t){
  const e=$('#toast');

  if(!e){
    console.log(t);
    return;
  }

  e.textContent=t;
  e.classList.add('show');

  setTimeout(
    ()=>e.classList.remove('show'),
    2200
  );
}

function applyTheme(){
  document.documentElement.dataset.theme=
    state.themeMode||'light';

  document.documentElement.style.setProperty(
    '--primary',
    state.accentColor||'#e98f8f'
  );

  document.documentElement.style.setProperty(
    '--primary2',
    state.accentColor||'#e98f8f'
  );

  document.documentElement.style.setProperty(
    '--accent-soft',
    state.accentColor||'#e98f8f'
  );
}

function customItemKey(projectId,itemId){
  return `${projectId}:${itemId}`;
}

async function loadCustomItems(){
  state.customItems={};

  if(
    !sb ||
    !state.appUserId ||
    !state.customProjects.length
  ){
    return;
  }

  const projectIds=
    state.customProjects.map(p=>p.id);

  const {
    data,
    error
  }=await sb
    .from('custom_items')
    .select('*')
    .eq('user_id',state.appUserId)
    .in('project_id',projectIds)
    .order('sort_order')
    .order('created_at');

  if(error){
    console.error(
      'カスタム項目読み込みエラー:',
      error
    );
    return;
  }

  (data||[]).forEach(item=>{
    state.customItems[
      customItemKey(
        item.project_id,
        item.id
      )
    ]=item;
  });
}

async function ensureOfficialGifts(giftDefinitionUserId, appUserId){
  const all=[
    ...OFFICIAL_GIFTS.map((g,i)=>({
      ...g, source:'official', event_key:null, sort_order:i
    })),
    ...Object.entries(EVENT_GIFTS).flatMap(([event,gs])=>
      gs.map((g,i)=>({
        ...g, source:'event', event_key:event, sort_order:i
      }))
    )
  ].map(g=>({
    user_id:giftDefinitionUserId,
    name:g.name,
    coin:g.coin,
    emoji:'🎁',
    target:10,
    sort_order:g.sort_order,
    source:g.source,
    event_key:g.event_key,
    group_name:g.group||null,
    mascot:g.mascot||null,
    variant:g.variant||null
  }));

  const {data:existingAll,error:existingError}=await sb
    .from('gift_definitions')
    .select('id,name,coin,source,event_key')
    .eq('user_id',giftDefinitionUserId);
  if(existingError)throw existingError;

  const existingOfficial=(existingAll||[]).filter(g=>g.source==='official');
  const groups=new Map();

  for(const g of existingOfficial){
    const key=`${g.name}|${g.coin}`;
    if(!groups.has(key))groups.set(key,[]);
    groups.get(key).push(g);
  }

  const duplicateIds=[];
  for(const rows of groups.values()){
    if(rows.length<=1)continue;
    const keep=rows[0];
    const ids=rows.slice(1).map(x=>x.id);

    const {data:counts,error:countError}=await sb
      .from('gift_counts')
      .select('gift_id,count')
      .eq('user_id',appUserId)
      .in('gift_id',[keep.id,...ids]);
    if(countError)throw countError;

    const total=(counts||[]).reduce((sum,x)=>sum+Number(x.count||0),0);
    if(total>0){
      const {error}=await sb.from('gift_counts').upsert({
        user_id:appUserId,
        gift_id:keep.id,
        count:total,
        updated_at:new Date().toISOString()
      },{onConflict:'user_id,gift_id'});
      if(error)throw error;
    }

    if(ids.length){
      const {error}=await sb.from('gift_counts').delete()
        .eq('user_id',appUserId).in('gift_id',ids);
      if(error)throw error;
      duplicateIds.push(...ids);
    }
  }

  if(duplicateIds.length){
    const {error}=await sb.from('gift_definitions').delete()
      .eq('user_id',giftDefinitionUserId).in('id',duplicateIds);
    if(error)throw error;
  }

  const {data:existing,error:reloadError}=await sb
    .from('gift_definitions')
    .select('id,name,coin,source,event_key')
    .eq('user_id',giftDefinitionUserId);
  if(reloadError)throw reloadError;

  const keySet=new Set((existing||[]).map(g=>
    `${g.source||'original'}|${g.event_key||''}|${g.name}|${g.coin}`
  ));

  const missing=all.filter(g=>!keySet.has(
    `${g.source}|${g.event_key||''}|${g.name}|${g.coin}`
  ));

  if(missing.length){
    const {error}=await sb.from('gift_definitions').insert(missing);
    if(error)throw error;
  }
}

async function load(){
  state.loading=true;
  render();

  if(!sb){
    state.loading=false;
    render();
    return;
  }

  const {
    data:{user}
  }=await sb.auth.getUser();

  state.user=user;
  state.authUserId=user?.id||null;

  if(user){
    const {
      data:appUser,
      error:appUserError
    }=await sb.rpc(
      'get_or_create_app_user'
    );

    if(appUserError){
      console.error(appUserError);
      toast(appUserError.message);
      state.loading=false;
      render();
      return;
    }

    state.appUser=appUser;
    state.appUserId=appUser.id;

    const {
      data:existingProfile,
      error:profileCheckError
    }=await sb
      .from('profiles')
      .select('*')
      .eq('id',state.appUserId)
      .maybeSingle();

    if(profileCheckError){
      console.error(profileCheckError);
    }

    if(!existingProfile){
      const {
        error:profileInsertError
      }=await sb
        .from('profiles')
        .insert({
          id:state.appUserId,
          display_name:'Avvyユーザー',
          theme_mode:'light',
          accent_color:'#e98f8f',
          updated_at:new Date().toISOString()
        });

      if(profileInsertError){
        console.error(profileInsertError);
      }
    }

    try{
      await ensureOfficialGifts(
        state.authUserId,
        state.appUserId
      );
    }catch(giftSetupError){
      console.error(
        '公式ギフト初期化エラー:',
        giftSetupError
      );
      state.loading=false;
      render();
      toast(
        '公式ギフトの準備に失敗しました。\n'+
        (giftSetupError?.message||String(giftSetupError))
      );
      return false;
    }

    const [
      pr,
      gd,
      gc,
      ic,
      cp,
      es,
      egs,
      gts
    ]=await Promise.all([
      sb
        .from('profiles')
        .select('*')
        .eq('id',state.appUserId)
        .maybeSingle(),

      sb
        .from('gift_definitions')
        .select('*')
        .eq('user_id',state.authUserId)
        .order('coin')
        .order('source')
        .order('sort_order'),

      sb
        .from('gift_counts')
        .select('*')
        .eq('user_id',state.appUserId),

      sb
        .from('endurance_item_counts')
        .select('*')
        .eq('user_id',state.appUserId),

      sb
        .from('endurance_projects')
        .select('*')
        .eq('user_id',state.appUserId)
        .eq('type','custom')
        .order(
          'created_at',
          {ascending:false}
        ),

      sb
        .from('gift_event_settings')
        .select('*')
        .eq('user_id',state.appUserId),

      sb
        .from('gift_event_gift_settings')
        .select('*')
        .eq('user_id',state.appUserId),

      sb
        .from('gift_targets')
        .select('*')
        .eq('user_id',state.appUserId)
    ]);

    state.profile=pr.data||null;

    state.gifts=gd.data||[];

    state.giftCounts=
      Object.fromEntries(
        (gc.data||[]).map(
          x=>[x.gift_id,x.count]
        )
      );

    state.itemCounts=
      Object.fromEntries(
        (ic.data||[]).map(
          x=>[
            x.category+':'+x.item_key,
            x.count
          ]
        )
      );

    state.customProjects=cp.data||[];

    await loadCustomItems();

    state.eventSettings=
      Object.fromEntries(
        (es.data||[]).map(
          x=>[x.event_key,x.enabled]
        )
      );

    state.eventGiftSettings=
      Object.fromEntries(
        (egs.data||[]).map(
          x=>[x.gift_id,x.enabled]
        )
      );

    state.giftTargets=
      Object.fromEntries(
        (gts.data||[]).map(
          x=>[
            `${x.source}|${x.event_key||''}|${Number(x.coin)}`,
            Number(x.target)||50
          ]
        )
      );

    state.themeMode=
      state.profile?.theme_mode||'light';

    state.accentColor=
      state.profile?.accent_color||'#e98f8f';

    applyTheme();

  }else{
    state.authUserId=null;
    state.appUser=null;
    state.appUserId=null;
    state.profile=null;
    state.gifts=[];
    state.giftCounts={};
    state.itemCounts={};
    state.customProjects=[];
    state.customItems={};
    state.eventSettings={};
    state.eventGiftSettings={};
    state.giftTargets={};
  }

  state.loading=false;
  render();
}

async function signUp(
  email,
  password,
  name
){
  const {
    data,
    error
  }=await sb.auth.signUp({
    email,
    password,
    options:{
      data:{
        display_name:name
      }
    }
  });

  if(error)throw error;

  toast(
    data.session
      ? '登録しました'
      : '登録しました。確認メールを確認してください'
  );

  await load();
}

async function signIn(
  email,
  password
){
  const {error}=await sb.auth.signInWithPassword({
    email,
    password
  });

  if(error)throw error;

  toast('ログインしました');

  await load();
}

async function startNewUser(){
  try{
    if(!sb){
      throw new Error(
        'Supabaseが設定されていません'
      );
    }

    const {
      data,
      error
    }=await sb.auth.signInAnonymously();

    if(error)throw error;

    if(!data?.user){
      throw new Error(
        '匿名ログインに失敗しました'
      );
    }

    const loaded=await load();

    if(loaded===false){
      throw new Error(
        '公式ギフトの準備に失敗しました。'
      );
    }

    if(!state.appUser?.user_code){
      throw new Error(
        'ユーザーコードの取得に失敗しました'
      );
    }

    alert(
      '新しくはじめました！\n\n'+
      'あなたのユーザーコード：\n'+
      state.appUser.user_code+
      '\n\nこのコードはデータ引き継ぎに必要なので、大切に保管してください。'
    );

  }catch(e){
    console.error(
      '新しくはじめるエラー:',
      e
    );

    alert(
      '処理に失敗しました。\n\n'+
      'エラー内容：\n'+
      (e?.message||String(e))
    );
  }
}

async function takeoverUser(){
  if(!sb){
    alert(
      'Supabaseの設定がありません。'
    );
    return;
  }

  const input=prompt(
    '引き継ぎたいユーザーコードを入力してください。\n\n'+
    '例：AVVY-XXXX-XXXX'
  );

  if(input===null)return;

  const code=input
    .trim()
    .toUpperCase();

  if(!code){
    alert(
      'ユーザーコードを入力してください。'
    );
    return;
  }

  try{
    const {
      data:sessionData
    }=await sb.auth.getSession();

    if(!sessionData?.session){
      const {
        data,
        error
      }=await sb.auth.signInAnonymously();

      if(error)throw error;

      if(!data?.user){
        throw new Error(
          '匿名ユーザーの作成に失敗しました。'
        );
      }
    }

    const {
      data,
      error
    }=await sb.rpc(
      'link_app_user_by_code',
      {
        input_code:code
      }
    );

    if(error)throw error;

    if(!data){
      throw new Error(
        'ユーザーコードの引き継ぎに失敗しました。'
      );
    }

    const loaded=await load();

    if(loaded===false){
      throw new Error(
        '公式ギフトの準備に失敗しました。'
      );
    }

    alert(
      'データを引き継ぎました！'
    );

  }catch(error){
    console.error(error);

    alert(
      'データの引き継ぎに失敗しました。\n'+
      (error.message||error)
    );
  }
}

async function signOut(){
  if(!sb)return;

  await sb.auth.signOut();

  state.user=null;
  state.authUserId=null;
  state.appUser=null;
  state.appUserId=null;
  state.profile=null;
  state.gifts=[];
  state.giftCounts={};
  state.itemCounts={};
  state.customProjects=[];
  state.customItems={};
  state.eventSettings={};
  state.eventGiftSettings={};
  state.giftTargets={};
  state.loading=false;

  render();
}

function header(){
  const displayName=
    state.profile?.display_name||
    'Avvyユーザー';

  return `
    <header class="top">
      <div class="top-inner">

        <div class="brand">
          ✦ Avvy配信補助ツール
        </div>

        <div class="userbox">
          ${
            state.user
              ? `
                <span class="user-name">
                  👤 ${esc(displayName)}
                </span>

                <button
                  class="iconbtn"
                  id="quickSettings"
                  title="見た目の設定"
                >
                  ⚙️
                </button>
              `
              :''
          }
        </div>

      </div>

      <nav class="tabs">
        ${
          TABS.map(
            ([id,ic,n])=>`
              <button
                data-tab="${id}"
                class="${state.tab===id?'active':''}"
              >
                ${ic} ${n}
              </button>
            `
          ).join('')
        }
      </nav>
    </header>
  `;
}

function auth(){
  return `
    <section
      class="auth card"
      style="text-align:center;"
    >
      <h2 style="color:var(--text,#222);">
        ☁️ Avvyをはじめる
      </h2>

      <p
        class="muted"
        style="color:var(--muted,#666);"
      >
        データはクラウドに保存されます。
      </p>

      <div
        class="auth-actions"
        style="
          display:flex;
          flex-direction:column;
          gap:12px;
          margin-top:20px;
        "
      >
        <button
          class="primary"
          id="startNewUser"
          style="font-size:16px;"
        >
          ✨ 新しくはじめる
        </button>

        <button
          class="secondary"
          id="takeoverUser"
          style="font-size:16px;"
        >
          ☁️ データを引き継ぐ
        </button>
      </div>
    </section>
  `;
}

function home(){
  const total=
    Object.values(state.giftCounts)
      .reduce(
        (a,b)=>a+Number(b||0),
        0
      );

  const selected=
    Object.values(state.itemCounts)
      .reduce(
        (a,b)=>a+Number(b||0),
        0
      );

  const customTotal=
    Object.entries(state.itemCounts||{})
      .filter(
        ([key])=>key.startsWith('custom:')
      )
      .reduce(
        (sum,[,value])=>
          sum+Number(value||0),
        0
      );

  return `
    <div class="hero">
      <h1>
        耐久配信のカウントを、かんたんに。
      </h1>

      <p>
        ギフトや各種企画をタップするだけで記録できます。
      </p>
    </div>

    <div class="grid">

      <div class="card">
        <h3>🎁 ギフト</h3>
        <div class="big">
          ${total}
        </div>

        <p class="muted">
          登録ギフトの合計カウント
        </p>

        <button
          class="primary"
          data-jump="gift"
        >
          ギフト耐久を開く
        </button>
      </div>

      <div class="card">
        <h3>📊 企画カウント</h3>

        <div class="big">
          ${selected}
        </div>

        <p class="muted">
          星座・MBTI・都道府県など
        </p>

        <button
          class="secondary"
          data-jump="pref"
        >
          企画を開く
        </button>
      </div>

      <div class="card">
        <h3>✨ カスタム耐久</h3>

        <div class="big">
          ${customTotal}
        </div>

        <p class="muted">
          自分で作成した耐久の合計
        </p>

        <button
          class="secondary"
          data-jump="custom"
        >
          カスタムを開く
        </button>
      </div>

    </div>
  `;
}

function gift(){
  const official=
    state.gifts.filter(
      g=>g.source==='official'
    );

  const coins=[
    ...new Set(
      official.map(
        g=>Number(g.coin)
      )
    )
  ].sort(
    (a,b)=>a-b
  );

  const events=[
    ...new Set(
      state.gifts
        .filter(
          g=>
            g.source==='event'&&
            state.eventSettings[g.event_key]
        )
        .map(g=>g.event_key)
    )
  ];

  const selectedEventGifts=
    state.gifts.filter(
      g=>
        g.source==='event'&&
        state.eventSettings[g.event_key]&&
        state.eventGiftSettings[g.id]!==false
    );

  const allSelected=[
    ...official,
    ...selectedEventGifts
  ];

  const overall=
    giftTypeSummary(allSelected);

  return `
    <div class="card">

      <div class="section-head">
        <div>
          <h2>🎁 ギフト耐久</h2>
          <p class="top-note">
            1回でも受け取ったギフトは達成済みになります。
          </p>
        </div>

        <button
          class="secondary"
          id="eventSettings"
        >
          イベント設定
        </button>
      </div>

      ${summaryHtml(
        overall,
        true,
        '全ギフ耐久'
      )}

      ${coins.map(
        c=>giftOfficialGroup(c)
      ).join('')}

      ${
        events.length
          ? events.map(
              e=>giftEventGroup(e)
            ).join('')
          : `
            <div class="empty">
              イベント限定ギフトは現在OFFです。
              「イベント設定」から追加できます。
            </div>
          `
      }

    </div>
  `;
}

function giftTypeSummary(gs){
  const total=gs.length;

  const achieved=
    gs.filter(
      g=>Number(
        state.giftCounts[g.id]||0
      )>0
    ).length;

  const remaining=
    Math.max(
      0,
      total-achieved
    );

  const pct=
    total
      ? Math.min(
          100,
          achieved/total*100
        )
      : 0;

  return {
    achieved,
    total,
    remaining,
    pct
  };
}

function summaryHtml(
  summary,
  isOverall=false,
  label=''
){
  return `
    <div class="target-summary">

      <div class="target-main">
        <strong>
          ${summary.achieved} / ${summary.total}種類
        </strong>

        <span>
          残り ${summary.remaining}種類
        </span>
      </div>

      ${
        label
          ? `
            <div class="summary-label">
              ${esc(label)}
            </div>
          `
          :''
      }

      <div class="progress">
        <i
          style="width:${summary.pct}%"
        ></i>
      </div>

      ${
        summary.total&&
        summary.achieved===summary.total
          ? `
            <div class="complete-badge">
              🎉 全ギフト達成！
            </div>
          `
          :''
      }

    </div>
  `;
}

function giftOfficialGroup(coin){
  const gs=
    state.gifts.filter(
      g=>
        g.source==='official'&&
        Number(g.coin)===coin
    );

  const summary=
    giftTypeSummary(gs);

  if(coin===5){
    const groups=[
      '文字系',
      'かわいい系',
      'Avvyケモず系'
    ];

    return `
      <div class="coin-group">

        <div class="coin-head">
          <div>
            <div class="coin-title">
              5C
            </div>
          </div>

          <div class="row">
            <button
              class="danger"
              data-reset-source="official"
              data-reset-coin="${coin}"
            >
              リセット
            </button>
          </div>
        </div>

        ${summaryHtml(summary)}

        ${
          groups.map(
            group=>`
              <div class="gift-category">

                <h4>
                  ${group}
                </h4>

                ${
                  group==='Avvyケモず系'
                    ? mascotGroups(gs)
                    : giftButtons(
                        gs.filter(
                          g=>g.group_name===group
                        )
                      )
                }

              </div>
            `
          ).join('')
        }

      </div>
    `;
  }

  return `
    <div class="coin-group">

      <div class="coin-head">

        <div>
          <div class="coin-title">
            ${coin}C
          </div>
        </div>

        <div class="row">
          <button
            class="danger"
            data-reset-source="official"
            data-reset-coin="${coin}"
          >
            リセット
          </button>
        </div>

      </div>

      ${summaryHtml(summary)}

      ${giftButtons(gs)}

    </div>
  `;
}

function mascotGroups(gs){
  const order=[
    'アヴィエル',
    'でんきゅいぬ',
    'げるくま',
    'ヨルワール',
    'クロル',
    'ウパめろ'
  ];

  return order.map(
    m=>`
      <div class="mascot-group">

        <h5>
          ${m}
        </h5>

        ${
          giftButtons(
            gs.filter(
              g=>g.mascot===m
            )
          )
        }

      </div>
    `
  ).join('');
}

function giftButtons(gs){
  return `
    <div class="gift-grid">
      ${
        gs.map(
          g=>`
            <button
              class="gift-btn"
              data-gift="${g.id}"
            >
              <strong>
                🎁 ${esc(g.name)}
              </strong>

              <span>
                ${Number(
                  state.giftCounts[g.id]||0
                )}個
              </span>
            </button>
          `
        ).join('')
      }
    </div>
  `;
}

function giftEventGroup(event){
  const gs=
    state.gifts.filter(
      g=>
        g.source==='event'&&
        g.event_key===event&&
        state.eventGiftSettings[g.id]!==false
    );

  const coins=[
    ...new Set(
      gs.map(
        g=>Number(g.coin)
      )
    )
  ].sort(
    (a,b)=>a-b
  );

  const overall=
    giftTypeSummary(gs);

  return `
    <div class="event-group">

      <div class="coin-head">

        <div class="coin-title">
          ${esc(event)}
        </div>

        <button
          class="danger"
          data-reset-event="${esc(event)}"
        >
          リセット
        </button>

      </div>

      ${summaryHtml(
        overall,
        false,
        'イベント内進捗'
      )}

      ${
        coins.map(
          c=>{
            const xs=
              gs.filter(
                g=>Number(g.coin)===c
              );

            const summary=
              giftTypeSummary(xs);

            return `
              <div class="event-coin">

                <div class="coin-head">
                  <h4>${c}C</h4>
                </div>

                ${summaryHtml(summary)}

                ${giftButtons(xs)}

              </div>
            `;
          }
        ).join('')
      }

    </div>
  `;
}

function eventSettingsModal(){
  const rows=
    EVENT_KEYS.map(
      e=>`
        <div class="item">

          <span>
            <b>${esc(e)}</b>
            <br>
            <small class="muted">
              ${EVENT_GIFTS[e].length}種類
            </small>
          </span>

          <button
            class="${state.eventSettings[e]?'primary':'secondary'}"
            data-event-toggle="${esc(e)}"
          >
            ${state.eventSettings[e]?'ON':'OFF'}
          </button>

        </div>
      `
    ).join('');

  const detail=
    EVENT_KEYS.map(
      e=>`
        <div class="event-setting-box">

          <div class="section-head">
            <b>${esc(e)}</b>
            <span class="pill">
              ${state.eventSettings[e]?'使用中':'未使用'}
            </span>
          </div>

          ${
            EVENT_GIFTS[e].map(
              g=>{
                const def=
                  state.gifts.find(
                    x=>
                      x.source==='event'&&
                      x.event_key===e&&
                      x.name===g.name&&
                      Number(x.coin)===g.coin
                  );

                const on=
                  def
                    ? state.eventGiftSettings[def.id]!==false
                    : false;

                return `
                  <label class="check-row">

                    <input
                      type="checkbox"
                      data-event-gift="${def?.id||''}"
                      ${on?'checked':''}
                      ${state.eventSettings[e]?'':'disabled'}
                    >

                    <span>
                      ${g.coin}C ${esc(g.name)}
                    </span>

                  </label>
                `;
              }
            ).join('')
          }

        </div>
      `
    ).join('');

  const m=modal(`
    <div class="section-head">

      <h2>
        🎪 イベントギフト設定
      </h2>

      <button
        class="iconbtn"
        id="x"
      >
        ×
      </button>

    </div>

    <p class="muted">
      イベント全体のON/OFFと、
      イベント内の個別ギフトを選べます。
    </p>

    <div class="list">
      ${rows}
    </div>

    <div style="margin-top:14px">
      ${detail}
    </div>
  `);

  m.querySelector('#x').onclick=
    ()=>m.remove();

  m.querySelectorAll(
    '[data-event-toggle]'
  ).forEach(
    b=>b.onclick=async()=>{
      const e=
        b.dataset.eventToggle;

      const enabled=
        !state.eventSettings[e];

      const {error}=
        await sb
          .from('gift_event_settings')
          .upsert(
            {
              user_id:state.appUserId,
              event_key:e,
              enabled,
              updated_at:new Date().toISOString()
            },
            {
              onConflict:
                'user_id,event_key'
            }
          );

      if(error){
        toast(error.message);
      }else{
        state.eventSettings[e]=enabled;
        eventSettingsModalReplace(m);
      }
    }
  );

  m.querySelectorAll(
    '[data-event-gift]'
  ).forEach(
    ch=>ch.onchange=async()=>{
      if(!ch.dataset.eventGift)return;

      const enabled=ch.checked;

      const {error}=
        await sb
          .from('gift_event_gift_settings')
          .upsert(
            {
              user_id:state.appUserId,
              gift_id:ch.dataset.eventGift,
              enabled,
              updated_at:new Date().toISOString()
            },
            {
              onConflict:
                'user_id,gift_id'
            }
          );

      if(error){
        toast(error.message);
      }else{
        state.eventGiftSettings[
          ch.dataset.eventGift
        ]=enabled;
      }
    }
  );
}

function eventSettingsModalReplace(old){
  old.remove();
  eventSettingsModal();
}

async function editGiftTarget(raw){
  const [
    source,
    eventKey,
    coin
  ]=raw.split('|');

  const key=
    `${source}|${eventKey||''}|${Number(coin)}`;

  const current=
    state.giftTargets[key]||50;

  const input=prompt(
    `${coin}Cの目標個数を入力してください`,
    String(current)
  );

  if(input===null)return;

  const target=
    Math.max(
      1,
      Number(input)||current
    );

  const {error}=
    await sb
      .from('gift_targets')
      .upsert(
        {
          user_id:state.appUserId,
          source,
          event_key:eventKey||null,
          coin:Number(coin),
          target,
          updated_at:new Date().toISOString()
        },
        {
          onConflict:
            'user_id,source,event_key,coin'
        }
      );

  if(error){
    toast(error.message);
  }else{
    state.giftTargets[key]=target;
    render();
    toast(
      '目標個数を更新しました'
    );
  }
}

function resetEvent(event){
  const ids=
    state.gifts
      .filter(
        g=>
          g.source==='event'&&
          g.event_key===event
      )
      .map(g=>g.id);

  if(!ids.length)return;

  sb
    .from('gift_counts')
    .delete()
    .eq('user_id',state.appUserId)
    .in('gift_id',ids)
    .then(
      ({error})=>{
        if(error){
          toast(error.message);
        }else{
          ids.forEach(
            id=>delete state.giftCounts[id]
          );

          render();

          toast(
            'イベントをリセットしました'
          );
        }
      }
    );
}

function choicePage(
  title,
  icon,
  category,
  items
){
  const vals=
    items.map(
      i=>Number(
        state.itemCounts[
          category+':'+i
        ]||0
      )
    );

  const achieved=
    vals.filter(
      count=>count>0
    ).length;

  const total=items.length;

  const remaining=
    Math.max(
      0,
      total-achieved
    );

  const pct=
    total
      ? Math.min(
          100,
          (achieved/total)*100
        )
      : 0;

  return `
    <div class="card">

      <div class="section-head">

        <div>
          <h2>
            ${icon} ${title}
          </h2>

          <p class="top-note">
            項目をタップすると＋1
          </p>
        </div>

        <button
          class="danger"
          data-reset-category="${esc(category)}"
        >
          リセット
        </button>

      </div>

      <div
        class="counterline"
        style="margin-bottom:8px"
      >
        達成 ${achieved} / ${total}種類
        ・残り ${remaining}種類
      </div>

      <div class="progress">
        <i
          style="width:${pct}%"
        ></i>
      </div>

      ${
        achieved===total
          ? `
            <div class="complete-badge">
              🎉 全${esc(title)}達成！
            </div>
          `
          :''
      }

      <div
        class="choice-grid"
        style="margin-top:14px"
      >
        ${
          items.map(
            (x,i)=>{
              const count=vals[i];

              return `
                <button
                  class="choice-btn ${count>0?'checked':''}"
                  data-item-cat="${esc(category)}"
                  data-item-key="${esc(x)}"
                >
                  <strong>
                    ${esc(x)}
                  </strong>

                  <span>
                    ${count}回
                  </span>
                </button>
              `;
            }
          ).join('')
        }
      </div>

    </div>
  `;
}

function origift(){
  if(!state.user)return auth();

  const gs=
    state.gifts.filter(
      g=>g.source==='original'
    );

  return `
    <div class="card">

      <div class="section-head">

        <div>
          <h2>🎨 オリギフ</h2>

          <p class="top-note">
            あなた専用のオリジナルギフトを作成できます。
          </p>
        </div>

        <button
          class="primary"
          id="newOrigift"
        >
          ＋ 追加
        </button>

      </div>

      ${
        gs.length
          ? `
            <div class="gift-grid">

              ${
                gs.map(
                  g=>`
                    <div class="origift-card">

                      <button
                        class="gift-btn"
                        data-gift="${g.id}"
                      >
                        <strong>
                          🎁 ${esc(g.name)}
                        </strong>

                        <span>
                          ${g.coin}C ・
                          ${Number(
                            state.giftCounts[g.id]||0
                          )}個
                        </span>
                      </button>

                      <button
                        class="danger small-btn"
                        data-del-origift="${g.id}"
                      >
                        削除
                      </button>

                    </div>
                  `
                ).join('')
              }

            </div>
          `
          : `
            <div class="empty">
              まだオリギフがありません。
            </div>
          `
      }

      ${
        gs.length
          ? `
            <div
              class="coin-head"
              style="margin-top:16px"
            >
              <span class="counterline">
                合計 ${
                  gs.reduce(
                    (a,g)=>
                      a+
                      Number(
                        state.giftCounts[g.id]||0
                      ),
                    0
                  )
                } 個
              </span>

              <button
                class="danger"
                id="resetOrigift"
              >
                リセット
              </button>
            </div>
          `
          :''
      }

    </div>
  `;
}

function newOrigift(){
  const m=modal(`
    <div class="section-head">

      <h2>
        🎨 オリギフを追加
      </h2>

      <button
        class="iconbtn"
        id="x"
      >
        ×
      </button>

    </div>

    <div class="form">

      <label>
        ギフト名
      </label>

      <input
        id="ogn"
        placeholder="例：ありがとう！"
      >

      <label>
        コイン数
      </label>

      <input
        id="ogc"
        type="number"
        min="1"
        value="5"
      >

      <label>
        表示用絵文字
      </label>

      <input
        id="oge"
        maxlength="2"
        placeholder="🎁"
      >

      <label>
        ジャンル（任意）
      </label>

      <input
        id="ogg"
        placeholder="例：お祝い系"
      >

      <button
        class="primary"
        id="ok"
      >
        追加する
      </button>

    </div>
  `);

  m.querySelector('#x').onclick=
    ()=>m.remove();

  m.querySelector('#ok').onclick=
    async()=>{
      const name=
        m.querySelector('#ogn')
          .value
          .trim();

      const coin=
        Number(
          m.querySelector('#ogc').value
        );

      const emoji=
        m.querySelector('#oge')
          .value
          .trim()||'🎁';

      const group=
        m.querySelector('#ogg')
          .value
          .trim()||null;

      if(!name||!coin){
        return toast(
          'ギフト名とコイン数を入力してください'
        );
      }

      const {error}=
        await sb
          .from('gift_definitions')
          .insert({
            user_id:state.authUserId,
            name,
            coin,
            emoji,
            target:10,
            source:'original',
            group_name:group,
            sort_order:0
          });

      if(error){
        toast(error.message);
      }else{
        m.remove();

        await load();

        toast(
          'オリギフを追加しました'
        );
      }
    };
}

function custom(){
  if(!state.user)return auth();

  return `
    <div class="card">

      <div class="section-head">

        <div>
          <h2>
            ✨ カスタム
          </h2>

          <p class="top-note">
            自分だけの耐久を作れます
          </p>
        </div>

        <button
          class="primary"
          id="newCustom"
        >
          ＋ 新規作成
        </button>

      </div>

      ${
        state.customProjects.length
          ? `
            <div class="list">

              ${
                state.customProjects.map(
                  p=>{
                    const current=
                      Object.entries(
                        state.itemCounts||{}
                      )
                      .filter(
                        ([k])=>
                          k.startsWith(
                            `custom:${p.id}:`
                          )
                      )
                      .reduce(
                        (sum,[,v])=>
                          sum+Number(v||0),
                        0
                      );

                    return `
                      <div class="item">

                        <span>
                          <b>
                            ${esc(p.name)}
                          </b>

                          <br>

                          <small class="muted">
                            現在 ${current}
                            /
                            目標 ${Number(p.goal)||0}
                          </small>
                        </span>

                        <div class="row">

                          <button
                            class="secondary"
                            data-open-custom="${p.id}"
                          >
                            開く
                          </button>

                          <button
                            class="secondary"
                            data-manage-custom="${p.id}"
                          >
                            項目管理
                          </button>

                          <button
                            class="danger"
                            data-delete-custom="${p.id}"
                          >
                            耐久を削除
                          </button>

                        </div>

                      </div>
                    `;
                  }
                ).join('')
              }

            </div>
          `
          : `
            <div class="empty">
              まだカスタム耐久がありません。
            </div>
          `
      }

    </div>
  `;
}

function settings(){
  if(!state.user)return auth();

  const displayName=
    state.profile?.display_name||
    'Avvyユーザー';

  const userCode=
    state.appUser?.user_code||'';

  return `
    <div class="grid">

      <div class="card">

        <h2>
          👤 アカウント
        </h2>

        <p class="muted">
          現在のユーザー名
        </p>

        <p
          style="
            font-size:20px;
            font-weight:700;
            margin:6px 0 18px;
          "
        >
          ${esc(displayName)}
        </p>

        <div class="form">

          <label>
            ユーザー名を変更
          </label>

          <input
            id="newDisplayName"
            type="text"
            maxlength="30"
            value="${esc(displayName)}"
            placeholder="例：あびぃちゃん"
          >

          <button
            class="primary"
            id="saveDisplayName"
            type="button"
          >
            ユーザー名を変更する
          </button>

        </div>

        <div
          style="
            margin-top:18px;
            padding:12px;
            border-radius:10px;
            background:var(
              --accent-soft,
              rgba(0,0,0,.05)
            );
          "
        >

          <div
            class="muted"
            style="font-size:13px;"
          >
            ユーザーコード
          </div>

          <strong
            id="userCodeDisplay"
            style="
              font-size:20px;
              letter-spacing:1px;
            "
          >
            ${esc(userCode)}
          </strong>

        </div>

        <p class="muted">
          このコードを別の端末で入力すると、
          データを引き継げます。
        </p>

        <div
          class="row"
          style="margin-top:10px;"
        >

          <button
            class="secondary"
            id="copyUserCode"
          >
            📋 コードをコピー
          </button>

        </div>

        <button
          class="danger"
          id="logout"
          style="margin-top:12px;"
        >
          ログアウト
        </button>

      </div>

      <div class="card">

        <h2>
          🌓 表示モード
        </h2>

        <p class="muted">
          ホワイトモードとダークモードを切り替えられます。
        </p>

        <div class="row">

          <button
            class="${state.themeMode==='light'?'primary':'secondary'}"
            data-theme-mode="light"
          >
            ☀️ ホワイト
          </button>

          <button
            class="${state.themeMode==='dark'?'primary':'secondary'}"
            data-theme-mode="dark"
          >
            🌙 ダーク
          </button>

        </div>

      </div>

      <div class="card">

        <h2>
          🎨 ボタンカラー
        </h2>

        <p class="muted">
          ユーザー名横の⚙️から、
          ボタン・進捗バー・アクセントカラーを変更できます。
        </p>

        <div class="row">

          <span
            class="pill"
            style="
              background:${state.accentColor};
              color:#fff
            "
          >
            現在のカラー
          </span>

          <button
            class="secondary"
            id="openAppearance"
          >
            色を変更
          </button>

        </div>

      </div>

      <div class="card">

        <h2>
          ✨ カスタム耐久管理
        </h2>

        <p class="muted">
          カスタム耐久で使用する項目を管理できます。
        </p>

        <div id="customManageList">

          ${
            state.customProjects?.length
              ? state.customProjects.map(
                  p=>`
                    <div
                      class="card"
                      style="
                        margin-top:12px;
                        padding:14px;
                      "
                    >

                      <div
                        style="
                          display:flex;
                          justify-content:space-between;
                          align-items:center;
                          gap:10px;
                        "
                      >

                        <div>

                          <strong>
                            ✨ ${esc(p.name)}
                          </strong>

                          <div class="muted">
                            目標 ${Number(p.goal)||0}
                          </div>

                        </div>

                        <div class="row">

                          <button
                            class="secondary"
                            data-manage-custom="${p.id}"
                          >
                            項目管理
                          </button>

                          <button
                            class="danger"
                            data-delete-custom="${p.id}"
                          >
                            耐久を削除
                          </button>

                        </div>

                      </div>

                    </div>
                  `
                ).join('')
              : `
                <div class="empty">
                  作成したカスタム耐久はありません。
                </div>
              `
          }

        </div>

      </div>

      <div class="card">

        <h2>
          ☁️ クラウド
        </h2>

        <p class="muted">
          耐久データと表示設定をクラウドに保存しています。
        </p>

      </div>

    </div>
  `;
}

function page(){
  if(
    !state.user&&
    !hasConfig()
  ){
    return `
      <div class="card">
        <h2>
          Supabase接続設定が必要です
        </h2>

        <p>
          config.jsを確認してください。
        </p>
      </div>
    `;
  }

  if(!state.user){
    return auth();
  }

  if(state.tab==='home'){
    return home();
  }

  if(state.tab==='gift'){
    return gift();
  }

  if(state.tab==='pref'){
    return choicePage(
      '都道府県',
      '📍',
      'pref',
      PREF
    );
  }

  if(state.tab==='mbti'){
    return choicePage(
      'MBTI',
      '🧠',
      'mbti',
      MBTI
    );
  }

  if(state.tab==='zodiac'){
    return choicePage(
      '星座',
      '⭐',
      'zodiac',
      ZODIAC
    );
  }

  if(state.tab==='origift'){
    return origift();
  }

  if(state.tab==='custom'){
    return custom();
  }

  return settings();
}


/* ==================================================
   ここが今回追加した render()
   ================================================== */

function render(){

  const root=
    $('#app')||
    $('#root')||
    document.querySelector('main');

  if(!root){
    console.error(
      '表示先の要素が見つかりません。#app / #root / main を確認してください。'
    );
    return;
  }

  applyTheme();

  if(state.loading){
    root.innerHTML=`
      ${state.user?header():''}

      <main class="container">
        <div
          class="card"
          style="
            text-align:center;
            padding:40px 20px;
          "
        >
          <div
            style="
              font-size:32px;
              margin-bottom:10px;
            "
          >
            ☁️
          </div>

          <strong>
            読み込み中…
          </strong>

          <p class="muted">
            データを確認しています。
          </p>
        </div>
      </main>
    `;

    bind();
    return;
  }

  root.innerHTML=`
    ${header()}

    <main class="container">
      ${page()}
    </main>
  `;

  bind();
}


/* ==================================================
   ギフト関連
   ================================================== */

async function incrementGift(id){
  if(
    !sb||
    !state.user||
    !state.appUserId||
    String(id).startsWith('demo-')
  ){
    if(
      String(id).startsWith('demo-')
    ){
      toast(
        'このサンプルギフトは「ギフト管理」から登録すると保存できます。'
      );
    }

    return;
  }

  const next=
    Number(
      state.giftCounts[id]||0
    )+1;

  const {error}=
    await sb
      .from('gift_counts')
      .upsert(
        {
          user_id:state.appUserId,
          gift_id:id,
          count:next,
          updated_at:new Date().toISOString()
        },
        {
          onConflict:
            'user_id,gift_id'
        }
      );

  if(error){
    toast(error.message);
  }else{
    state.giftCounts[id]=next;
    render();
  }
}

async function resetCoin(
  coin,
  source='official'
){
  const ids=
    state.gifts
      .filter(
        g=>
          Number(g.coin)===Number(coin)&&
          g.source===source
      )
      .map(g=>g.id);

  if(!ids.length)return;

  const {error}=
    await sb
      .from('gift_counts')
      .delete()
      .eq('user_id',state.appUserId)
      .in('gift_id',ids);

  if(error){
    toast(error.message);
  }else{
    ids.forEach(
      id=>delete state.giftCounts[id]
    );

    render();

    toast(
      `${coin}Cをリセットしました`
    );
  }
}

async function incrementItem(
  cat,
  key
){
  if(
    !sb||
    !state.user||
    !state.appUserId
  ){
    return;
  }

  const k=cat+':'+key;

  const next=
    Number(
      state.itemCounts[k]||0
    )+1;

  const {error}=
    await sb
      .from('endurance_item_counts')
      .upsert(
        {
          user_id:state.appUserId,
          category:cat,
          item_key:key,
          count:next,
          updated_at:new Date().toISOString()
        },
        {
          onConflict:
            'user_id,category,item_key'
        }
      );

  if(error){
    toast(error.message);
  }else{
    state.itemCounts[k]=next;
    render();
  }
}

async function resetCategory(cat){
  const {error}=
    await sb
      .from('endurance_item_counts')
      .delete()
      .eq('user_id',state.appUserId)
      .eq('category',cat);

  if(error){
    toast(error.message);
  }else{
    Object.keys(
      state.itemCounts
    )
    .filter(
      k=>k.startsWith(cat+':')
    )
    .forEach(
      k=>delete state.itemCounts[k]
    );

    render();

    toast(
      'リセットしました'
    );
  }
}


/* ==================================================
   モーダル
   ================================================== */

function modal(html){
  const m=
    document.createElement('div');

  m.className='modal';

  m.innerHTML=
    `<div class="modal-box">${html}</div>`;

  document.body.appendChild(m);

  return m;
}


/* ==================================================
   設定
   ================================================== */

function quickSettings(){
  const colors=[
    '#e98f8f',
    '#e7a0b7',
    '#8fb7d9',
    '#8fc7b4',
    '#c7a1d8',
    '#d7a66b'
  ];

  const m=modal(`
    <div class="section-head">

      <h2>
        🎨 ボタンカラー
      </h2>

      <button
        class="iconbtn"
        id="x"
      >
        ×
      </button>

    </div>

    <p class="muted">
      ボタン・アクセント・進捗バーなどの色を変更できます。
      背景色はここでは変更しません。
    </p>

    <div class="swatches">
      ${
        colors.map(
          c=>`
            <button
              class="swatch ${state.accentColor===c?'active':''}"
              style="background:${c}"
              data-color="${c}"
              aria-label="${c}"
            ></button>
          `
        ).join('')
      }
    </div>

    <div
      class="form"
      style="margin-top:16px"
    >

      <label>
        カスタムボタンカラー
      </label>

      <input
        id="customColor"
        type="color"
        value="${state.accentColor}"
      >

      <button
        class="primary"
        id="saveColor"
      >
        この色を保存
      </button>

    </div>
  `);

  m.querySelector('#x').onclick=
    ()=>m.remove();

  m.querySelectorAll(
    '[data-color]'
  ).forEach(
    b=>b.onclick=
      ()=>saveTheme(
        b.dataset.color,
        m
      )
  );

  m.querySelector('#saveColor').onclick=
    ()=>saveTheme(
      m.querySelector('#customColor').value,
      m
    );
}

async function saveTheme(
  color,
  m
){
  const {error}=
    await sb
      .from('profiles')
      .update({
        accent_color:color,
        updated_at:new Date().toISOString()
      })
      .eq('id',state.appUserId);

  if(error){
    toast(error.message);
  }else{
    state.accentColor=color;

    applyTheme();

    m.remove();

    toast(
      'ボタンカラーを保存しました'
    );

    render();
  }
}

function giftManager(){
  const m=modal(`
    <div class="section-head">

      <h2>
        🎁 ギフト管理
      </h2>

      <button
        class="iconbtn"
        id="x"
      >
        ×
      </button>

    </div>

    <p class="muted">
      ギフト名とコイン数を登録すると、
      コイン数ごとの欄に自動で表示されます。
    </p>

    <div class="form">

      <label>
        ギフト名
      </label>

      <input
        id="gn"
        placeholder="例：ハート"
      >

      <label>
        コイン数
      </label>

      <input
        id="gc"
        type="number"
        min="1"
        placeholder="5"
      >

      <label>
        絵文字
      </label>

      <input
        id="ge"
        maxlength="2"
        placeholder="💗"
      >

      <label>
        目標個数（このギフトの目安）
      </label>

      <input
        id="gt"
        type="number"
        min="1"
        value="10"
      >

      <button
        class="primary"
        id="addGift"
      >
        登録する
      </button>

    </div>

    <div
      style="margin-top:18px"
      class="list"
    >
      ${
        state.gifts
          .filter(
            g=>!String(g.id).startsWith('demo-')
          )
          .map(
            g=>`
              <div class="item">

                <span>
                  ${esc(g.emoji||'🎁')}
                  ${esc(g.name)}
                  <span class="pill">
                    ${g.coin}C
                  </span>
                </span>

                <button
                  class="danger"
                  data-del-gift="${g.id}"
                >
                  削除
                </button>

              </div>
            `
          ).join('')
      }
    </div>
  `);

  m.querySelector('#x').onclick=
    ()=>m.remove();

  m.querySelector('#addGift').onclick=
    async()=>{
      const name=
        m.querySelector('#gn')
          .value
          .trim();

      const coin=
        Number(
          m.querySelector('#gc').value
        );

      const emoji=
        m.querySelector('#ge')
          .value
          .trim()||'🎁';

      const target=
        Number(
          m.querySelector('#gt').value
        )||10;

      if(!name||!coin){
        return toast(
          'ギフト名とコイン数を入力してください'
        );
      }

      const {error}=
        await sb
          .from('gift_definitions')
          .insert({
            user_id:state.authUserId,
            name,
            coin,
            emoji,
            target
          });

      if(error){
        toast(error.message);
      }else{
        m.remove();

        await load();

        toast(
          'ギフトを登録しました'
        );
      }
    };

  m.querySelectorAll(
    '[data-del-gift]'
  ).forEach(
    b=>b.onclick=async()=>{
      if(
        !confirm(
          'このギフトを削除しますか？'
        )
      ){
        return;
      }

      await sb
        .from('gift_definitions')
        .delete()
        .eq(
          'id',
          b.dataset.delGift
        );

      m.remove();

      await load();
    }
  );
}

function customManager(project){
  const items=
    Object.values(
      state.customItems||{}
    )
    .filter(
      i=>i.project_id===project.id
    )
    .sort(
      (a,b)=>
        (a.sort_order||0)-
        (b.sort_order||0)
    );

  const m=modal(`
    <div class="section-head">

      <h2>
        ✨ ${esc(project.name)}
      </h2>

      <button
        class="iconbtn"
        id="x"
        type="button"
      >
        ×
      </button>

    </div>

    <p class="muted">
      項目をタップすると＋1。
      項目の追加・削除もできます。
    </p>

    <div
      class="form"
      style="margin-bottom:14px"
    >

      <input
        id="newCustomItemName"
        placeholder="例：おにぎり"
      >

      <button
        class="primary"
        id="addCustomItem"
        type="button"
      >
        ＋ 項目を追加
      </button>

    </div>

    <div
      class="choice-grid"
      id="customItems"
    >

      ${
        items.length
          ? items.map(
              item=>{
                const count=
                  Number(
                    state.itemCounts[
                      `custom:${project.id}:${item.id}`
                    ]||0
                  );

                return `
                  <div class="origift-card">

                    <button
                      class="choice-btn ${count>0?'checked':''}"
                      data-custom-item="${item.id}"
                      type="button"
                    >

                      <strong>
                        ${esc(item.name)}
                      </strong>

                      <span>
                        ${count}回
                      </span>

                    </button>

                    <button
                      class="danger small-btn"
                      data-del-custom-item="${item.id}"
                      type="button"
                    >
                      削除
                    </button>

                  </div>
                `;
              }
            ).join('')
          : `
            <div class="empty">
              まだ項目がありません。
            </div>
          `
      }

    </div>

    <div
      class="coin-head"
      style="margin-top:14px"
    >

      <span class="counterline">
        目標 ${Number(project.goal)||0}
      </span>

      <div class="row">

        <button
          class="danger"
          id="resetCustomProject"
          type="button"
        >
          リセット
        </button>

        <button
          class="danger"
          id="deleteCustomProject"
          type="button"
        >
          この耐久を削除
        </button>

      </div>

    </div>
  `);

  m.querySelector('#x').onclick=
    ()=>{
      m.remove();
    };

  m.querySelector(
    '#addCustomItem'
  ).onclick=async()=>{
    const input=
      m.querySelector(
        '#newCustomItemName'
      );

    const name=
      input.value.trim();

    if(!name){
      toast(
        '項目名を入力してください'
      );
      return;
    }

    const {error}=
      await sb
        .from('custom_items')
        .insert({
          user_id:state.appUserId,
          project_id:project.id,
          name,
          sort_order:items.length
        });

    if(error){
      toast(error.message);
      return;
    }

    await load();

    m.remove();

    const updatedProject=
      state.customProjects.find(
        p=>p.id===project.id
      );

    if(updatedProject){
      customManager(updatedProject);
    }

    toast(
      '項目を追加しました'
    );
  };

  m.querySelectorAll(
    '[data-custom-item]'
  ).forEach(
    b=>{
      b.onclick=async()=>{
        const itemId=
          b.dataset.customItem;

        const key=
          `custom:${project.id}:${itemId}`;

        const next=
          Number(
            state.itemCounts[key]||0
          )+1;

        const {error}=
          await sb
            .from('endurance_item_counts')
            .upsert(
              {
                user_id:state.appUserId,
                category:`custom:${project.id}`,
                item_key:itemId,
                count:next,
                updated_at:new Date().toISOString()
              },
              {
                onConflict:
                  'user_id,category,item_key'
              }
            );

        if(error){
          toast(error.message);
          return;
        }

        state.itemCounts[key]=next;

        const countSpan=
          b.querySelector('span');

        if(countSpan){
          countSpan.textContent=
            `${next}回`;
        }

        b.classList.add(
          'checked'
        );
      };
    }
  );

  m.querySelectorAll(
    '[data-del-custom-item]'
  ).forEach(
    b=>{
      b.onclick=async()=>{
        if(
          !confirm(
            'この項目を削除しますか？'
          )
        ){
          return;
        }

        const itemId=
          b.dataset.delCustomItem;

        await sb
          .from('endurance_item_counts')
          .delete()
          .eq(
            'user_id',
            state.appUserId
          )
          .eq(
            'category',
            `custom:${project.id}`
          )
          .eq(
            'item_key',
            itemId
          );

        await sb
          .from('custom_items')
          .delete()
          .eq(
            'id',
            itemId
          )
          .eq(
            'user_id',
            state.appUserId
          );

        await load();

        m.remove();

        const updatedProject=
          state.customProjects.find(
            p=>p.id===project.id
          );

        if(updatedProject){
          customManager(
            updatedProject
          );
        }
      };
    }
  );

  m.querySelector(
    '#resetCustomProject'
  ).onclick=async()=>{
    if(
      !confirm(
        'このカスタム耐久のカウントをリセットしますか？'
      )
    ){
      return;
    }

    await sb
      .from('endurance_item_counts')
      .delete()
      .eq(
        'user_id',
        state.appUserId
      )
      .eq(
        'category',
        `custom:${project.id}`
      );

    Object.keys(
      state.itemCounts
    )
    .filter(
      k=>
        k.startsWith(
          `custom:${project.id}:`
        )
    )
    .forEach(
      k=>delete state.itemCounts[k]
    );

    m.remove();

    customManager(project);

    toast(
      'カスタム耐久をリセットしました'
    );
  };

  m.querySelector(
    '#deleteCustomProject'
  ).onclick=async()=>{
    m.remove();
    await deleteCustomProject(project);
  };

  return m;
}


async function deleteCustomProject(project){
  if(!sb||!state.appUserId||!project?.id)return;

  if(!confirm(
    `「${project.name}」を削除しますか？\n\n`+
    'この耐久と、登録されている項目・各項目のカウントをすべて削除します。\n'+
    'この操作は元に戻せません。'
  )){
    return;
  }

  try{
    const projectId=project.id;
    const category=`custom:${projectId}`;

    const {error:countError}=await sb
      .from('endurance_item_counts')
      .delete()
      .eq('user_id',state.appUserId)
      .eq('category',category);
    if(countError)throw countError;

    const {error:itemError}=await sb
      .from('custom_items')
      .delete()
      .eq('user_id',state.appUserId)
      .eq('project_id',projectId);
    if(itemError)throw itemError;

    const {error:projectError}=await sb
      .from('endurance_projects')
      .delete()
      .eq('user_id',state.appUserId)
      .eq('id',projectId)
      .eq('type','custom');
    if(projectError)throw projectError;

    Object.keys(state.itemCounts||{})
      .filter(key=>key.startsWith(`${category}:`))
      .forEach(key=>delete state.itemCounts[key]);

    state.customProjects=state.customProjects.filter(
      p=>String(p.id)!==String(projectId)
    );

    Object.keys(state.customItems||{})
      .filter(key=>key.startsWith(`${projectId}:`))
      .forEach(key=>delete state.customItems[key]);

    render();
    toast(`「${project.name}」を削除しました`);
  }catch(error){
    console.error('カスタム耐久削除エラー:',error);
    toast(`カスタム耐久の削除に失敗しました：${error?.message||error}`);
  }
}

function newCustom(){
  const m=modal(`
    <h2>
      ✨ 新しいカスタム耐久
    </h2>

    <div class="form">

      <label>
        耐久名
      </label>

      <input
        id="pn"
        placeholder="例：コメント耐久"
      >

      <label>
        目標数
      </label>

      <input
        id="pg"
        type="number"
        min="1"
        value="50"
      >

      <div class="row">

        <button
          class="primary"
          id="ok"
          type="button"
        >
          作成
        </button>

        <button
          class="secondary"
          id="cancel"
          type="button"
        >
          キャンセル
        </button>

      </div>

    </div>
  `);

  m.querySelector('#cancel').onclick=
    ()=>{
      m.remove();
    };

  m.querySelector('#ok').onclick=
    async()=>{
      const name=
        m.querySelector('#pn')
          .value
          .trim()||
        'カスタム耐久';

      const goal=
        Number(
          m.querySelector('#pg').value
        )||50;

      const {error}=
        await sb
          .from('endurance_projects')
          .insert({
            user_id:state.appUserId,
            type:'custom',
            name,
            goal,
            current:0
          });

      if(error){
        toast(error.message);
        return;
      }

      m.remove();

      await load();

      toast(
        'カスタム耐久を作成しました'
      );
    };
}

async function saveThemeMode(mode){
  const {error}=
    await sb
      .from('profiles')
      .update({
        theme_mode:mode,
        updated_at:new Date().toISOString()
      })
      .eq(
        'id',
        state.appUserId
      );

  if(error){
    toast(error.message);
  }else{
    state.themeMode=mode;

    applyTheme();

    render();

    toast(
      mode==='dark'
        ? 'ダークモードにしました'
        : 'ホワイトモードにしました'
    );
  }
}


/* ==================================================
   イベント・ボタン処理
   ================================================== */

function bind(){

  document
    .querySelectorAll('.tabs button')
    .forEach(
      b=>{
        b.onclick=()=>{
          state.tab=
            b.dataset.tab;

          render();
        };
      }
    );

  document
    .querySelectorAll('[data-jump]')
    .forEach(
      b=>{
        b.onclick=()=>{
          state.tab=
            b.dataset.jump;

          render();
        };
      }
    );

  $('#quickSettings')?.addEventListener(
    'click',
    quickSettings
  );

  $('#openAppearance')?.addEventListener(
    'click',
    quickSettings
  );

  $('#saveDisplayName')?.addEventListener(
    'click',
    async()=>{
      const input=
        $('#newDisplayName');

      if(!input)return;

      const name=
        input.value.trim();

      if(!name){
        toast(
          'ユーザー名を入力してください'
        );
        return;
      }

      if(name.length>30){
        toast(
          'ユーザー名は30文字以内にしてください'
        );
        return;
      }

      const {error}=
        await sb
          .from('profiles')
          .update({
            display_name:name,
            updated_at:new Date().toISOString()
          })
          .eq(
            'id',
            state.appUserId
          );

      if(error){
        console.error(error);
        toast(error.message);
        return;
      }

      state.profile=
        state.profile||{};

      state.profile.display_name=
        name;

      toast(
        'ユーザー名を変更しました'
      );

      render();
    }
  );

  document
    .querySelectorAll(
      '[data-theme-mode]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          saveThemeMode(
            b.dataset.themeMode
          );
        };
      }
    );

  $('#startNewUser')?.addEventListener(
    'click',
    startNewUser
  );

  $('#takeoverUser')?.addEventListener(
    'click',
    takeoverUser
  );

  $('#logout')?.addEventListener(
    'click',
    signOut
  );

  $('#copyUserCode')?.addEventListener(
    'click',
    async()=>{
      const code=
        state.appUser?.user_code;

      if(!code)return;

      try{
        await navigator.clipboard.writeText(
          code
        );

        toast(
          'ユーザーコードをコピーしました'
        );

      }catch(error){
        console.error(error);

        prompt(
          'ユーザーコードをコピーしてください',
          code
        );
      }
    }
  );

  document
    .querySelectorAll('[data-gift]')
    .forEach(
      b=>{
        b.onclick=()=>{
          incrementGift(
            b.dataset.gift
          );
        };
      }
    );

  document
    .querySelectorAll('[data-reset-coin]')
    .forEach(
      b=>{
        b.onclick=()=>{
          resetCoin(
            b.dataset.resetCoin
          );
        };
      }
    );

  document
    .querySelectorAll('[data-item-cat]')
    .forEach(
      b=>{
        b.onclick=()=>{
          incrementItem(
            b.dataset.itemCat,
            b.dataset.itemKey
          );
        };
      }
    );

  document
    .querySelectorAll(
      '[data-reset-category]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          resetCategory(
            b.dataset.resetCategory
          );
        };
      }
    );

  $('#eventSettings')?.addEventListener(
    'click',
    eventSettingsModal
  );

  document
    .querySelectorAll(
      '[data-reset-source]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          resetCoin(
            b.dataset.resetCoin,
            'official'
          );
        };
      }
    );

  document
    .querySelectorAll(
      '[data-reset-event]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          resetEvent(
            b.dataset.resetEvent
          );
        };
      }
    );

  $('#newOrigift')?.addEventListener(
    'click',
    newOrigift
  );

  document
    .querySelectorAll(
      '[data-del-origift]'
    )
    .forEach(
      b=>{
        b.onclick=async()=>{
          if(
            !confirm(
              'このオリギフを削除しますか？'
            )
          ){
            return;
          }

          await sb
            .from('gift_definitions')
            .delete()
            .eq(
              'id',
              b.dataset.delOrigift
            )
            .eq(
              'user_id',
              state.authUserId
            );

          await load();
        };
      }
    );

  $('#resetOrigift')?.addEventListener(
    'click',
    async()=>{
      const ids=
        state.gifts
          .filter(
            g=>g.source==='original'
          )
          .map(g=>g.id);

      if(ids.length){
        await sb
          .from('gift_counts')
          .delete()
          .eq(
            'user_id',
            state.appUserId
          )
          .in(
            'gift_id',
            ids
          );
      }

      await load();

      toast(
        'オリギフをリセットしました'
      );
    }
  );

  $('#newCustom')?.addEventListener(
    'click',
    newCustom
  );

  document
    .querySelectorAll(
      '[data-open-custom]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          const project=
            state.customProjects.find(
              p=>
                String(p.id)===
                String(b.dataset.openCustom)
            );

          if(project){
            customManager(project);
          }
        };
      }
    );

  document
    .querySelectorAll(
      '[data-manage-custom]'
    )
    .forEach(
      b=>{
        b.onclick=()=>{
          const project=
            state.customProjects.find(
              p=>
                String(p.id)===
                String(b.dataset.manageCustom)
            );

          if(project){
            customManager(project);
          }
        };
      }
    );

  document
    .querySelectorAll(
      '[data-delete-custom]'
    )
    .forEach(
      b=>{
        b.onclick=async()=>{
          const project=
            state.customProjects.find(
              p=>
                String(p.id)===
                String(b.dataset.deleteCustom)
            );

          if(project){
            await deleteCustomProject(project);
          }
        };
      }
    );
}


/* ==================================================
   Supabase起動
   ================================================== */

if(sb){
  sb.auth.onAuthStateChange(()=>{
    load();
  });
}

applyTheme();
load();
