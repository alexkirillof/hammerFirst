import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  FileImageOutlined,
  GiftOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'Основные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboards',
        path: `${APP_PREFIX_PATH}/main/dashboards`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'Товары',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'Категории',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'Комбо',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'clientsList',
            path: `${APP_PREFIX_PATH}/main/clients/clientsList`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clientsGroups',
            path: `${APP_PREFIX_PATH}/main/clients/clientsGroups`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'Баннеры',
        icon: FileImageOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promoCodes',
        path: `${APP_PREFIX_PATH}/main/promoCodes`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offlineStores',
        path: `${APP_PREFIX_PATH}/main/offlineStores`,
        title: 'Оффлайн точки',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'addresses',
            path: `${APP_PREFIX_PATH}/offlineStores/addresses`,
            title: 'Адреса',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'geofences',
            path: `${APP_PREFIX_PATH}/offlineStores/geofences`,
            title: 'Геозоны',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'Сотрудники',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const systemicNavTree = [
  {
    key: 'systemic',
    path: `${APP_PREFIX_PATH}/systemic`,
    title: 'Системные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/systemic/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobileApp',
        path: `${APP_PREFIX_PATH}/systemic/mobileApp`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/systemic/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [...mainNavTree, ...systemicNavTree]

export default navigationConfig
