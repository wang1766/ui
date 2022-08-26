export default {
  api: {
    operationFailed: '操作失败',
    errorTip: '错误提示',
    errorMessage: '操作失败,系统异常!',
    timeoutMessage: '登录超时,请重新登录!',
    apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
    apiRequestFailed: '请求出错，请稍候重试',
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',

    errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
    errMsg403: '用户得到授权，但是访问是被禁止的。!',
    errMsg404: '网络请求错误,未找到该资源!',
    errMsg405: '网络请求错误,请求方法未允许!',
    errMsg408: '网络请求超时!',
    errMsg500: '服务器错误,请联系管理员!',
    errMsg501: '网络未实现!',
    errMsg502: '网络错误!',
    errMsg503: '服务不可用，服务器暂时过载或维护!',
    errMsg504: '网络超时!',
    errMsg505: 'http版本不支持该请求!',
  },
  app: { logoutTip: '温馨提醒', logoutMessage: '是否确认退出系统?', menuLoading: '菜单加载中...' },
  errorLog: {
    tableTitle: '错误日志列表',
    tableColumnType: '类型',
    tableColumnDate: '时间',
    tableColumnFile: '文件',
    tableColumnMsg: '错误信息',
    tableColumnStackMsg: 'stack信息',

    tableActionDesc: '详情',

    modalTitle: '错误详情',

    fireVueError: '点击触发vue错误',
    fireResourceError: '点击触发资源加载错误',
    fireAjaxError: '点击触发ajax错误',

    enableMessage: '只在`/src/settings/projectSetting.ts` 内的useErrorHandle=true时生效.',
  },
  exception: {
    backLogin: '返回登录',
    backHome: '返回首页',
    subTitle403: '抱歉，您无权访问此页面。',
    subTitle404: '抱歉，您访问的页面不存在。',
    subTitle500: '抱歉，服务器报告错误。',
    noDataTitle: '当前页无数据',
    networkErrorTitle: '网络错误',
    networkErrorSubTitle: '抱歉，您的网络连接已断开，请检查您的网络！',
  },
  lock: {
    unlock: '点击解锁',
    alert: '锁屏密码错误',
    backToLogin: '返回登录',
    entry: '进入系统',
    placeholder: '请输入锁屏密码或者用户密码',
  },
  login: {
    backSignIn: '返回',
    signInFormTitle: '登录',
    mobileSignInFormTitle: '手机登录',
    qrSignInFormTitle: '二维码登录',
    emailSignUpFormTitle: '邮箱注册',
    signUpFormTitle: '注册',
    forgetFormTitle: '重置密码',

    signInTitle: '开箱即用的中后台管理系统',
    signInDesc: '输入您的个人详细信息开始使用！',
    policy: '我同意xxx隐私政策',
    scanSign: `扫码后点击"确认"，即可完成登录`,

    loginButton: '登录',
    registerButton: '注册',
    rememberMe: '记住我',
    forgetPassword: '忘记密码?',
    otherSignIn: '其他登录方式',

    // notify
    loginSuccessTitle: '登录成功',
    loginSuccessDesc: '欢迎回来',
    signupSuccessTitle: '注册成功',
    signupSuccessDesc: '欢迎您的加入',
    signupUserExist: '用户名或者邮箱已被注册',
    userNotExist: '用户不存在',
    wrongCaptcha: '验证码错误',
    wrongUsernameOrPassword: '用户名或密码错误',
    requireLogin: '请重新登录',

    // placeholder
    accountPlaceholder: '请输入账号',
    passwordPlaceholder: '请输入密码',
    emailPlaceholder: '请输入邮箱',
    smsPlaceholder: '请输入验证码',
    mobilePlaceholder: '请输入手机号码',
    policyPlaceholder: '勾选后才能注册',
    diffPwd: '两次输入密码不一致',

    username: '用户名',
    password: '密码',
    confirmPassword: '确认密码',
    email: '邮箱',
    smsCode: '短信验证码',
    mobile: '手机号码',
    captcha: '验证码',
  },
  menu: {
    // noun
    menuName: '菜单名称',
    menuTitle: '显示名称',
    icon: '图标',
    order: '排序',
    component: '组件',
    statusName: '状态',
    type: '菜单类型',
    directory: '目录',
    menu: '菜单',
    button: '按钮',
    menuParent: '上级菜单',
    routePath: '路由地址',
    componentPath: '组件路径',
    isHttpPath: '外链',
    isKeepAlive: '缓存',
    isShown: '显示',
    isHidden: '隐藏',
    isBreadcrumbShown: '显示面包屑',
    currentActiveMenu: '激活窗口',
    isAutoCloseTab: '自动关闭窗口',
    redirectPath: '跳转路径',
    // action
    addMenu: '新增菜单',
    editMenu: '编辑菜单',
    // notification
    deleteChildrenDesc: '请先删除子菜单',
    menuNotExists: '菜单不存在',
    menuAlreadyExists: '菜单已存在',
    parentNotExist: '父级不存在',
  },
  role: {
    // noun
    roleList: '角色列表',
    roleName: '角色名称',
    roleValue: '角色值',
    roleTitle: '角色',
    defaultRouter: '默认路由',
    admin: '管理员',
    stuff: '员工',
    seller: '销售',
    member: '会员',
    // action
    addRole: '新增角色',
    editRole: '编辑角色',
    // notification
    changeStatusSuccess: '已成功修改角色状态',
    changeStatusFailed: '修改角色状态失败',
    duplicateRoleValue: '角色值重复',
    userExists: '请先删除该角色下的用户',
    roleForbidden: '您的角色已停用',
  },
  apis: {
    // noun
    apiList: 'API列表',
    path: '路径',
    description: '描述',
    method: '方法',
    group: '分组',
    // action
    addApi: '添加API',
    editApi: '编辑API',
  },
  authority: {
    authorityManagement: '权限管理',
    menuAuthority: '菜单',
    apiAuthority: 'API',
  },
  user: {
    // noun
    userList: '用户列表',
    nickname: '昵称',
    avatar: '头像',
    // action
    addUser: '新增用户',
    editUser: '编辑用户',
  },
  init: {
    // noun
    initTitle: '数据库初始化',
    initProgressTitle: '处理进度',
    initCoreDatabase: '核心数据库初始化',
    initFileDatabase: '文件管理数据库初始化',

    // notification
    initializeIsRunning: '正在初始化...',
    alreadyInit: '数据库已被初始化。',
  },
  sys: {
    version: '系统版本',
    Name: '系统名称',
  },
};
