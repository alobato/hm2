const uuid = require('uuid')

const lines =  `admin@admin.com|$2a$10$Sv.GyXYHoarIUk81xyEvNuMFpbjUl1yC.5SXjO.Gb0Amv8qwsiEvq|Admin|
magnusalfenas@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|ALFENAS|1
cedi@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|CEDI|2
crpii@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|CRPII|3
duodiagnosticos@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|DUODIAG|4
inneuro@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|INNEURO|5
intteligence@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|INTTELIGENCE|6
irsa@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|IRSA|7
kenko@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|KENKO|8
magnuscampinas@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MAGNUS CAMPINAS|9
magnusitajuba@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MAGNUS ITAJUBA|10
magnusvarginha@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MAGNUS VARGINHA|11
maisnove@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MAISNOVE|12
medimagem@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MEDIMAGEM|13
medlagos@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MEDLAGOS|14
medscaner@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MEDSCANER|15
megaimagem@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MEGAIMAGEM|16
novadiagnostico@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|NOVA DIAGNOSTICO|17
nscarmo@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|NS CARMO|18
prime@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|PRIME|19
radmed@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|RADMED|20
tomoimagem@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|TOMOIMAGEM|21
unimagem@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|UNIMAGEM|22
unimedvr@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|UNIMED-VR|23
deleted__teste@teste.com|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|TESTE|
claudia.ramos@bmkimagem.com.br|$2a$10$KLIS6M9CHqxDuD7Tf6EtBejBHvrEzQvMrP3thu/jMaUamqHRdVfCu|Claudia Ramos|
neuza@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|Neuza Kuroki|
deleted__arleylobato+teste@gmail.com|$2a$10$wB.VUQnzl2TNsN9iMJohguRwgl3g40WYXtA9qyH5RwtwA8pBxh1ni|Arley Teste|
kelly.megumi@bmkimagem.com.br|$2a$10$t62kTTF./XVtiGLpPHk.kuPekwilramTpyGBXb/jPjJy7LspVQR02|Kelly Megumi Iwasaki|
deleted__carolina.telerison@gmail.com|$2a$10$jzQGd6YZOtI5oeFb2FuyMe12wSUYNzJ305croIA0DSlfy8JLQQan6|Carolina Kazumi Shigihara|
izabela.coreixas@bmkimagem.com.br|$2a$10$KZxshS8IiTQZvfoPZdgjceV7rUPy3jhx3808R9Qyt8I1GqCt6cn/y|IZABELA COREIXAS|
bmk@bmkimagem.com.br|$2a$10$EVyHl0Z5GT/4Gr.2N9RoVuDIkvy0hcxsyxuFYnj.3NKRkydqKcYrC|BMK Imagem|25
iugiro@bmkimagem.com.br|$2a$10$awH70hcDstxarMOBdLoXGezTNmvOA77E6wZsiUVKHejmJ888SlKoa|Iugiro Kuroki|
fabio.magalhaes@bmkimagem.com.br|$2a$10$e4vHNcVvbeo6660.Yw9Lyexa1o5eEWVvrBo67ngaQreuzNE6crHnK|Fabio Vargas Magalhaes|
medscaner_rafael@bmkimagem.com.br|$2a$10$uR0Rl5tM7oEt4Fbi.hUNV.tCP6sJcFDtwC2QfHyoRUNfRObuFSH2u|Rafael Laguardia (MEDSCANER)|15
medscaner_gustavo@bmkimagem.com.br|$2a$10$EOyakDxLtuFogALExxey4e2waUpHKf8Pwu/UXzE3pieN/Ykvx4oWW|Gustavo Bello (MEDSCANER)|15
arleylobato@gmail.com|$2a$10$Sv.GyXYHoarIUk81xyEvNuMFpbjUl1yC.5SXjO.Gb0Amv8qwsiEvq|Arley Lobato|
xlamaralx@gmail.com|$2a$10$4c30MU0ENDOfzGVgy9QU8.RKACGMPt2QP4tWygtulAY4vp94OWNhO|Leonardo Amaral|
dis@bmkimagem.com.br|$2a$10$JbRXkJ7gnpwE22TsIUFTBeksB.jPDa3DqB/2zz131WHJkG7D46wXm|DIS|24
unimedtb@bmkimagem.com.br|$2a$10$uZkIOd.NVmQLs7YX/4BsZ.87jrSpXAQU/5.EMt.67MCrXoHrP5Y1q|UNIMED-TUBARAO|
deleted__karoline.kamimura@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|Karoline Martins Kamimura|
api_maisnove@bmkimagem.com.br|$2a$10$Z6xYdgrnyrwQ6wASJI2F8O7MPvArWkVf7JOdqK07eKzaZo14F5Q.e|MAISNOVE__API|12
fechamento@bmkimagem.com.br|$2a$10$oBIIPWG7sE2dv7H7U4RKYOFmlMGBOu7Mk88B.uuxvZtBdRxguOe1e|Fechamento BMK|
deleted__mariadapenha.santos1@bmkimagem.com.br|$2a$10$nk5L.QedGupazOzknL/aq.RV4qV0CGPvrKMEPMiQ1u.r1QQeDhdrG|Maria da Penha Santos|
melina.heredia@bmkimagem.com.br|$2a$10$Zc60wDok29R1eUF3cEUuweW5S1L0lo15steyEiE141E3teHfUKzCe|Melina Parra Heredia|
ultraclinica@bmkimagem.com.br|$2a$10$kiMGImnl8mXjW20Y4QakqePuBnXq4gy5KSPS5GLTbilk7ykqLzvni|ULTRA CLINICA|27
deleted__jessica.silva@bmkimagem.com.br|$2a$10$sRHi.r0VrPDVhHYXI53BnO2o2P5AYDh63bXol7TSNtpjizp.nQre6|Jessica Paola da Silva|
protondiagnosticos@bmkimagem.com.br|$2a$10$HT/DO9U8cs56pEGBrcKiNOw1MFF5rZaA.YsjlWESJRqObcLlQ88z.|PROTON DIAGNOSTICOS|28
kelvin.masakazu@bmkimagem.com.br|$2a$10$IjRg5eBu8kvzGXsPrHRZVe1LJiFgWRLOknN7MjE9GtOSenaIpKYOO|Kelvin Masakazu|
antoniofrancisco@bmkimagem.com.br|$2a$10$bLE6QVY7eAi5D8KMFQ35mO/0.5n4V.617ysnLDVMJBXPEbppu.4fu|ANTONIO FRANCISCO|29
carolina.shigihara@bmkimagem.com.br|$2a$10$RqdIJp7Hkc6IMvItHW08kOogilTaxN7gAUCAWRQZVZ.TFQab8w4fG|Carolina Shigihara|
radiodente@bmkimagem.com.br|$2a$10$lQ8.3g.VJpsArQGfqqdKI.jYYdnkqkxoNY9xpqCSN4vT4ct2LMOAi|RADIODENTE|30
deleted__monyelle.lima1@bmkimagem.com.br|$2a$10$lQ8.3g.VJpsArQGfqqdKI.jYYdnkqkxoNY9xpqCSN4vT4ct2LMOAi|Monyelle Marques de Lima|
unimedvr-medico@bmkimagem.com.br|$2a$10$vRc4ioHndfp8Xggvwf6uO.4JFBdK15K32Y/dbjMX2rsrmMLKoul4W|UNIMED-VR - MÉDICO|23
examina@bmkimagem.com.br|$2a$10$vBovHDAay.5Nx.Ou0GFT2.E935il2oukllTIuC2/qhS3bBMCC05K2|EXAMINA|31
kelvin.bueno5@bmkimagem.com.br|$2a$10$hxgCtaD67loTIZJP7fffBu27exxZupywpShIVAPoaaXC.eh/Vh442|Kelvin Bueno|
nathasha.pires@bmkimagem.com.br|$2a$10$UVLMU4a55tD/7S8oLywj9.BIvWnzYig717udpcdL8.LAG7IMNXmmi|Nathasha Bruno Pires|
rafael.santos1@bmkimagem.com.br|$2a$10$hy.TXQASpXQunId3ItKh1.Bwz4gRRzSBjdEIEkGufdJ4U2QxV5y36|Rafael Peres dos Santos|
deleted__camila.gregori1@bmkimagem.com.br|$2a$10$sIbGXecV/t/Wm6p3gLHiBetL/ioKB62EGfsL.Y0p01Y4lhQHgw5b.|Camila Roberta do Prado Gregori|
samer@bmkimagem.com.br|$2a$10$VrLNFOalrO2VfcMpOEccWOZ.Ov2Q5BSxDTQQchpjEqiNtrUBJ4swO|SAMER|32
nitida@bmkimagem.com.br|$2a$10$tJSlHzVzyKcyIsWsBUxSyOcesWz.XD5IAT56UrrPxS1eYJAC9ldUy|NITIDA|33
medscansobral@bmkimagem.com.br|$2a$10$DGBgNANN6sB5QCfB8WiCmuvoP4FJbRsIpc0OLXA0y/62SiMT0MGB2|MEDSCAN SOBRAL|34
beatriz.silva@bmkimagem.com.br|$2a$10$OY559pmR5TTuxINW9GcYgOWcCCCT.92aKuCIydaxd0So8QseMuv/q|Beatriz Regina da Silva|
cibam@bmkimagem.com.br|$2a$10$7o/jrmSYm/g9LLFSJnrEYelMGsTnP4Do.SvHIDpdkg6bAhhU4hb.6|CIBAM|35`.split('\n')


// Admin|admin@telerison.com|1|NULL|false|SUPERADMIN
// User TelerisOn|user@telerison.com|1|NULL|false|USER
// Admin BMK|admin@bmkimagem.com.br|2|NULL|false|ADMIN
// Médico BMK 1|medico1@bmkimagem.com.br|2|NULL|true|USER
// Médico BMK 2|medico2@bmkimagem.com.br|2|NULL|true|USER
// Médico BMK 3|medico3@bmkimagem.com.br|2|NULL|true|USER
// Médico BMK 4|medico4@bmkimagem.com.br|2|NULL|true|USER
// Médico BMK 5|medico5@bmkimagem.com.br|2|NULL|true|USER
// MEDLAGOS|medlagos@bmkimagem.com.br|2|2|false|USER`.split('\n')

// const usersMap = `iugiro@bmkimagem.com.br|8
// izabela.coreixas@bmkimagem.com.br|15
// fabio.magalhaes@bmkimagem.com.br|16`.split('\n')

export default {
  up: (queryInterface) => {
    const items = lines.map((line, index) => {
      const fields = line.split('|')
      return {
        sub: uuid.v4(),
        email: fields[0],
        password: fields[1],
        name: fields[2],
        AccountId: 2,
        ClinicId: fields[3] ? Number(fields[3]) : null,
        isDoctor: false,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    })
    return queryInterface.bulkInsert('Users', items, {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
