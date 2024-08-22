const pensionData: any = {
  men: {
    40: { OPVP: 6625999, OPV: 0 },
    41: { OPVP: 6687924, OPV: 0 },
    42: { OPVP: 6750428, OPV: 0 },
    43: { OPVP: 6813516, OPV: 0 },
    44: { OPVP: 6877194, OPV: 0 },
    45: { OPVP: 6941466, OPV: 7805681 },
    46: { OPVP: 7006340, OPV: 7878631 },
    47: { OPVP: 7071820, OPV: 7952264 },
    48: { OPVP: 7137181, OPV: 8026584 },
    49: { OPVP: 7204621, OPV: 8101599 },
    50: { OPVP: 7271954, OPV: 8177314 },
    51: { OPVP: 7059180, OPV: 8253738 },
    52: { OPVP: 6849351, OPV: 8330876 },
    53: { OPVP: 6642682, OPV: 8408734 },
    54: { OPVP: 6438088, OPV: 8487321 },
    55: { OPVP: 6235653, OPV: 8566641 },
    56: { OPVP: 6035464, OPV: 8346503 },
    57: { OPVP: 5837596, OPV: 8127932 },
    58: { OPVP: 5642740, OPV: 7911187 },
    59: { OPVP: 5447740, OPV: 7697334 },
    60: { OPVP: 5254378, OPV: 7486099 },
    61: { OPVP: 5061590, OPV: 7277203 },
    62: { OPVP: 4870350, OPV: 7070775 },
    63: { OPVP: 4679442, OPV: 6866072 },
  },
  women: {
    40: { OPVP: 8642663, OPV: 0 },
    41: { OPVP: 8723436, OPV: 0 },
    42: { OPVP: 8804963, OPV: 0 },
    43: { OPVP: 8887253, OPV: 0 },
    44: { OPVP: 8970311, OPV: 0 },
    45: { OPVP: 9054146, OPV: 9773444 },
    46: { OPVP: 9138764, OPV: 9864784 },
    47: { OPVP: 9224173, OPV: 9956797 },
    48: { OPVP: 9310380, OPV: 10384206 },
    49: { OPVP: 9397393, OPV: 10823424 },
    50: { OPVP: 9485219, OPV: 10924578 },
    51: { OPVP: 9257465, OPV: 11026676 },
    52: { OPVP: 9031879, OPV: 11129730 },
    53: { OPVP: 8806732, OPV: 11233746 },
    54: { OPVP: 8582734, OPV: 10980273 },
    55: { OPVP: 8360025, OPV: 10726537 },
    56: { OPVP: 8138479, OPV: 10471747 },
    57: { OPVP: 7918066, OPV: 10216198 },
    58: { OPVP: 7698996, OPV: 9961737 },
    59: { OPVP: 7480388, OPV: 9706740 },
    60: { OPVP: 7262437, OPV: 9451655 },
    61: { OPVP: 7044567, OPV: 9196758 },
    62: { OPVP: 6827333, OPV: 8942999 },
    63: { OPVP: 6610159, OPV: 8688131 },
  },
};

export type Gender = "men" | "women";

export function getPensionSum(age: number, gender: Gender) {
  if (!pensionData[gender] || !pensionData[gender][age]) {
    return
  }

  const { OPVP, OPV } = pensionData[gender][age];
  return {
    OPVP,
    OPV,
  };
}
