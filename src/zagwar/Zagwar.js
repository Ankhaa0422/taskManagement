import { makeStyles } from "@material-ui/styles"

export const Zagwar = makeStyles((theme) => ({

  container: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerFluid: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerXxl: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerXl: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerLg: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerMd: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  containerSm: {
    width: '100%',
    paddingRight: "var(--bs - gutter - x, 0.75rem)",
    paddingLeft: " var(--bs - gutter - x, 0.75rem)",
    marginRight: "auto",
    marginLeft: "auto",
  },

  '@media(min-width: 576px)': {
    container: {
      maxWidth: '540px',
    },
    containerSm: {
      maxWidth: '540px',
    },
  },
  '@media(min-width: 768px)': {
    containerMd: {
      maxWidth: '720px',
    },
    containerSm: {
      maxWidth: '720px',
    },
    container: {
      maxWidth: '720px',
    }
  },
  '@media(min-width: 992px)': {
    containerLg: {
      maxWidth: '960px',
    },
    containerMd: {
      maxWidth: '960px',
    },
    containerSm: {
      maxWidth: '960px',
    },
    container: {
      maxWidth: '960px',
    }
  },
  '@media(min-width: 1200px)': {
    containerXl: {
      maxWidth: '1140px',
    },
    containerLg: {
      maxWidth: '1140px',
    },
    containerMd: {
      maxWidth: '1140px',
    },
    containerSm: {
      maxWidth: '1140px',
    },
    container: {
      maxWidth: '1140px',
    }
  },
  '@media(min-width: 1400px)': {
    containerXxl: {
      maxWidth: '1320px',
    },
    containerXl: {
      maxWidth: '1320px',
    },
    containerLg: {
      maxWidth: '1320px',
    },
    containerMd: {
      maxWidth: '1320px',
    },
    containerSm: {
      maxWidth: '1320px',
    },
    container: {
      maxWidth: '1320px',
    }
  },
  Row: {
    '--bs-gutter-x': '1.5rem',
    '--bs-gutter-y': '0',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    marginRight: 'calc(var(--bs-gutter-x) / -2)',
    marginLeft: 'calc(var(--bs-gutter-x) / -2)',
  },
  '.row > *': {
    flexShrink: '0',
    width: '100%',
    maxWidth: '100%',
    paddingRight: 'calc(var(--bs-gutter-x) / 2)',
    paddingLeft: 'calc(var(--bs-gutter-x) / 2)',
    marginTop: 'var(--bs-gutter-y)',
  },

  Col: {
    flex: '1 0 0%',
  },

  ColAuto: {
    flex: '0 0 auto',
    width: 'auto',
  },

  Col1: {
    flex: '0 0 auto',
    width: '8.3333333333%',
  },

  Col2: {
    flex: '0 0 auto',
    width: '16.6666666667%',
  },

  Col3: {
    flex: '0 0 auto',
    width: '25%',
  },

  Col4: {
    flex: '0 0 auto',
    width: '33.3333333333%',
  },

  Col5: {
    flex: '0 0 auto',
    width: '41.6666666667%',
  },

  Col6: {
    flex: '0 0 auto',
    width: '50%',
  },

  Col7: {
    flex: '0 0 auto',
    width: '58.3333333333%',
  },

  Col8: {
    flex: '0 0 auto',
    width: '66.6666666667%',
  },

  Col9: {
    flex: '0 0 auto',
    width: '75%',
  },

  Col10: {
    flex: '0 0 auto',
    width: '83.3333333333 %',
  },

  Col11: {
    flex: '0 0 auto',
    width: '91.6666666667%',
  },

  Col12: {
    flex: '0 0 auto',
    width: '100%',
  },

  '@media(min-width: 576px)': {
    ColSm: {
      flex: '1 0 0%',
    },

    ColSmAuto: {
      flex: '0 0 auto',
      width: 'auto',
    },

    ColSm1: {
      flex: '0 0 auto',
      width: '8.3333333333%',
    },

    ColSm2: {
      flex: '0 0 auto',
      width: '16.6666666667%',
    },

    ColSm3: {
      flex: '0 0 auto',
      width: '25%',
    },

    ColSm4: {
      flex: '0 0 auto',
      width: '33.3333333333%',
    },

    ColSm5: {
      flex: '0 0 auto',
      width: '41.6666666667%',
    },

    ColSm6: {
      flex: '0 0 auto',
      width: '50%',
    },

    ColSm7: {
      flex: '0 0 auto',
      width: '58.3333333333%',
    },

    ColSm8: {
      flex: '0 0 auto',
      width: '66.6666666667%',
    },

    ColSm9: {
      flex: '0 0 auto',
      width: '75%',
    },

    ColSm10: {
      flex: '0 0 auto',
      width: '83.3333333333 %',
    },

    ColSm11: {
      flex: '0 0 auto',
      width: '91.6666666667%',
    },

    ColSm12: {
      flex: '0 0 auto',
      width: '100%',
    },
  },

  '@media(min-width: 768px)': {
    ColMd: {
      flex: '1 0 0%',
    },

    ColMdAuto: {
      flex: '0 0 auto',
      width: 'auto',
    },

    ColMd1: {
      flex: '0 0 auto',
      width: '8.3333333333%',
    },

    ColMd2: {
      flex: '0 0 auto',
      width: '16.6666666667%',
    },

    ColMd3: {
      flex: '0 0 auto',
      width: '25%',
    },

    ColMd4: {
      flex: '0 0 auto',
      width: '33.3333333333%',
    },

    ColMd5: {
      flex: '0 0 auto',
      width: '41.6666666667%',
    },

    ColMd6: {
      flex: '0 0 auto',
      width: '50%',
    },

    ColMd7: {
      flex: '0 0 auto',
      width: '58.3333333333%',
    },

    ColMd8: {
      flex: '0 0 auto',
      width: '66.6666666667%',
    },

    ColMd9: {
      flex: '0 0 auto',
      width: '75%',
    },

    ColMd10: {
      flex: '0 0 auto',
      width: '83.3333333333 %',
    },

    ColMd11: {
      flex: '0 0 auto',
      width: '91.6666666667%',
    },

    ColMd12: {
      flex: '0 0 auto',
      width: '100%',
    },
  },

  '@media(min-width: 992px)': {
    ColLg: {
      flex: '1 0 0%',
    },

    ColLgAuto: {
      flex: '0 0 auto',
      width: 'auto',
    },

    ColLg1: {
      flex: '0 0 auto',
      width: '8.3333333333%',
    },

    ColLg2: {
      flex: '0 0 auto',
      width: '16.6666666667%',
    },

    ColLg3: {
      flex: '0 0 auto',
      width: '25%',
    },

    ColLg4: {
      flex: '0 0 auto',
      width: '33.3333333333%',
    },

    ColLg5: {
      flex: '0 0 auto',
      width: '41.6666666667%',
    },

    ColLg6: {
      flex: '0 0 auto',
      width: '50%',
    },

    ColLg7: {
      flex: '0 0 auto',
      width: '58.3333333333%',
    },

    ColLg8: {
      flex: '0 0 auto',
      width: '66.6666666667%',
    },

    ColLg9: {
      flex: '0 0 auto',
      width: '75%',
    },

    ColLg10: {
      flex: '0 0 auto',
      width: '83.3333333333 %',
    },

    ColLg11: {
      flex: '0 0 auto',
      width: '91.6666666667%',
    },

    ColLg12: {
      flex: '0 0 auto',
      width: '100%',
    },
  },

  '@media(min-width: 1200px)': {
    ColXl: {
      flex: '1 0 0%',
    },

    ColXlAuto: {
      flex: '0 0 auto',
      width: 'auto',
    },

    ColXl1: {
      flex: '0 0 auto',
      width: '8.3333333333%',
    },

    ColXl2: {
      flex: '0 0 auto',
      width: '16.6666666667%',
    },

    ColXl3: {
      flex: '0 0 auto',
      width: '25%',
    },

    ColXl4: {
      flex: '0 0 auto',
      width: '33.3333333333%',
    },

    ColXl5: {
      flex: '0 0 auto',
      width: '41.6666666667%',
    },

    ColXl6: {
      flex: '0 0 auto',
      width: '50%',
    },

    ColXl7: {
      flex: '0 0 auto',
      width: '58.3333333333%',
    },

    ColXl8: {
      flex: '0 0 auto',
      width: '66.6666666667%',
    },

    ColXl9: {
      flex: '0 0 auto',
      width: '75%',
    },

    ColXl10: {
      flex: '0 0 auto',
      width: '83.3333333333 %',
    },

    ColXl11: {
      flex: '0 0 auto',
      width: '91.6666666667%',
    },

    ColXl12: {
      flex: '0 0 auto',
      width: '100%',
    },
  },

  '@media(min-width: 1400px)': {
    ColXxl: {
      flex: '1 0 0%',
    },

    ColXxlAuto: {
      flex: '0 0 auto',
      width: 'auto',
    },

    ColXxl1: {
      flex: '0 0 auto',
      width: '8.3333333333%',
    },

    ColXxl2: {
      flex: '0 0 auto',
      width: '16.6666666667%',
    },

    ColXxl3: {
      flex: '0 0 auto',
      width: '25%',
    },

    ColXxl4: {
      flex: '0 0 auto',
      width: '33.3333333333%',
    },

    ColXxl5: {
      flex: '0 0 auto',
      width: '41.6666666667%',
    },

    ColXxl6: {
      flex: '0 0 auto',
      width: '50%',
    },

    ColXxl7: {
      flex: '0 0 auto',
      width: '58.3333333333%',
    },

    ColXxl8: {
      flex: '0 0 auto',
      width: '66.6666666667%',
    },

    ColXxl9: {
      flex: '0 0 auto',
      width: '75%',
    },

    ColXxl10: {
      flex: '0 0 auto',
      width: '83.3333333333 %',
    },

    ColXxl11: {
      flex: '0 0 auto',
      width: '91.6666666667%',
    },

    ColXxl12: {
      flex: '0 0 auto',
      width: '100%',
    },
  },

  khaikhInput: {
    width: "300px",
  },

  textKhar: {
    color: "#000 !important",
  },

  BottomMenuItem: {
    bottom: "0",
  },

  medegdelTovch: {
    border: "none !important",
  },
  AsuultTovch: {
    border: "none !important",
    color: "#BEBEBE",
  },

  Centering: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  Bagana: {
    background: "#F5F5F5",
    padding: "15px",
    width: "95%",
    position: "relative",

    borderRadius: "10px",
    overflow: "auto",
  },

  TaskNemekhBtn: {
    width: "100%",
    background: "#E8E8E8 !important",
    border: "none",
    color: "#808080",
    borderRadius: "10px",
    boxShadow: "none",
    "&:hover": {
      background: "#E8E8E8 !important",
    },
  },
  droppableBagana: {
    width: "100%",
    height: "80%",
  },

  ajilCard: {
    background: "rgba(255,255,255,.7)",
    borderRadius: "5px",
    margin: "5px",
    padding: "10px",
    boxShadow: "2px 4px 4px -2px #D3D3D3",
    "&:hover": {
      cursor: "pointer",
    },
  },

  BaganaTolgoi: {
    display: "flex",
  },

  Toollogo: {
    background: "#F0F0F0",
    float: "right",
    borderRadius: "5px",
    padding: "2px",
    paddingLeft: "6px",
    paddingRight: "6px",
    color: "#808080",
  },

  LabelStyle: {
    margin: "10px",
    marginTop: "10px",
  },

  mb10px: {
    marginBottom: "10px",
  },

  AlbTush: {
    color: "#A8A8A8",
  },

  tusulParagraph: {
    color: "#808080",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "3s ease-in",
    "&:hover": {
      overflow: "auto",
    },
  },

  AjilchinAvatar: {
    border: "3px solid #fff",
  },
  AjilchinZone: {
    "& div:nth-child(1n+2)": {
      marginLeft: "-13px",
    },
    "& div:hover": {
      zIndex: "999",
    },
  },

  UstgahTovch: {
    border: "none !important",
    color: "red",
    background: "transparent",
    boxShadow: "none",
    "& :hover": {
      color: "red !important",
    },
  },
  AttachTovch: {
    border: "none !important",
    color: "#808080",
    boxShadow: "none",
    background: "transparent",
    "& :hover": {
      background: "none",
    },
  },

  Calendar: {
    margin: "20px",
  },

  UnguPopover: {
    position: "absolute",
    zIndex: "2",
  },

  UnguCover: {
    position: "fixed",
    display: "flex",
    width: "100%",
    height: "100%",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  Sticky: {
    position: "sticky !important",
    top: "0",
  },

  NewtrehZurag: {
    background: "url('https://focal.fossee.in/sites/default/files/styles/large/public/2020-07/Abstract%20Background%20Thumbnail.png?itok=UA3k5i32')",
    backgroundSize: "cover",
    backgroundPosition: "fixed",
  },
}))