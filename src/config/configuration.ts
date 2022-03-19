export default () => ({
  user: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
  thecamp: {
    soldier: {
      traineeMgrSeq: process.env.TRAINEE_MGR_SEQ,
      trainUnitCd: process.env.TRAIN_UNIT_CD,
      trainUnitEduSeq: process.env.TRAIN_UNIT_EDU_SEQ,
    },
  },
});
