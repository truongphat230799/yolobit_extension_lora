Blockly.Blocks['yolobit_lora_create'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "start",
            "message0": "khởi tạo Lora E32 chân TX %1 chân RX %2 address %3 %4 channel %5 %6",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "tx",
                "options": [
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "field_dropdown",
                "name": "rx",
                "options": [
                  [
                    "P0",
                    "pin0"
                  ],
                  [
                    "P1",
                    "pin1"
                  ],
                  [
                    "P2",
                    "pin2"
                  ],
                  [
                    "P3",
                    "pin3"
                  ],
                  [
                    "P4",
                    "pin4"
                  ],
                  [
                    "P5",
                    "pin5"
                  ],
                  [
                    "P6",
                    "pin6"
                  ],
                  [
                    "P7",
                    "pin7"
                  ],
                  [
                    "P8",
                    "pin8"
                  ],
                  [
                    "P9",
                    "pin9"
                  ],
                  [
                    "P10",
                    "pin10"
                  ],
                  [
                    "P11",
                    "pin11"
                  ],
                  [
                    "P12",
                    "pin12"
                  ],
                  [
                    "P13",
                    "pin13"
                  ],
                  [
                    "P14",
                    "pin14"
                  ],
                  [
                    "P15",
                    "pin15"
                  ],
                  [
                    "P16",
                    "pin16"
                  ]
                ]
              },
              {
                "type": "input_dummy",
              },
              {
                "type": "input_value",
                "name": "ADDRESS",
              },
              {
                "type": "input_dummy",
              },
              {
                "type": "input_value",
                "name": "CHANNEL",
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#505170",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.Python['yolobit_lora_create'] = function(block) {
        var tx = block.getFieldValue('tx');
        var rx = block.getFieldValue('rx');
        var address = block.getFieldValue('address');
        var channel = block.getFieldValue('channel');
        Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
        Blockly.Python.definitions_['import_machine'] = 'from yolobit_lorae32 import ebyteE32';
        Blockly.Python.definitions_['import_utime'] = 'import utime';
        // TODO: Assemble JavaScript into code variable.
        var code = 'e32 = ebyteE32(tx ='+ tx + '.pin,' + 'rx =' + rx +'.pin, Address ='+ address + ', Channel='+channel+', debug = False)\n' + 'e32.start()\n';
        return code;
    };

    Blockly.Blocks['yolobit_lora_send'] = {
        init: function() {
            this.jsonInit(
                {
                    "type": "yolobit_lora_send",
                    "message0": "gửi  %1 %2 đến address %3 %4 channel %5 %6",
                    "args0": [
                      {
                        "type": "input_dummy",
                      },
                      {
                        "type": "input_value",
                        "name": "MESSAGE",
                      },
                      {
                        "type": "input_dummy",
                      },
                      {
                        "type": "input_value",
                        "name": "ADDRESS",
                      },
                      {
                        "type": "input_dummy",
                      },
                      {
                        "type": "input_value",
                        "name": "CHANNEL",
                      }
                    ],
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": "#505170",
                    "tooltip": "",
                    "helpUrl": ""
                  }
            );
                }
    };
    Blockly.Python['yolobit_lora_send'] = function(block) {
        var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
        var to_address = block.getFieldValue('address');
        var to_channel = block.getFieldValue('channel');
        // TODO: Assemble Python into code variable.
        var code = 'e32.sendMessage('+to_address+','+ to_channel+','+ message+', useChecksum=True)';
        return code;
    };

    Blockly.Blocks['yolobit_lora_receive'] = {
        init: function() {
            this.jsonInit(
                {
                    "type": "yolobit_lora_receive",
                    "message0": "thông tin nhận được từ address %1 %2 channel %3 %4",
                    "args0": [
                          {
                            "type": "input_dummy",
                          },
                          {
                            "type": "input_value",
                            "name": "ADDRESS",
                          },
                          {
                            "type": "input_dummy",
                          },
                          {
                            "type": "input_value",
                            "name": "CHANNEL",
                          }
                    ],
                    "output": null,
                    "colour": "#505170",
                    "tooltip": "",
                    "helpUrl": ""
                  }
            );
                }
    };

    Blockly.Python['yolobit_lora_receive'] = function(block) {
        var from_address = block.getFieldValue('address');
        var from_channel = block.getFieldValue('channel');
        // TODO: Assemble Python into code variable.
        var code = 'e32.recvMessage(' +from_address + ',' + from_channel + ', useChecksum=True)';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_NONE];
    };

    Blockly.Blocks['yolobit_lora_check'] = {
      init: function() {
          this.jsonInit(
            {
              "type": "yolobit_lora_check",
              "message0": "có dữ liệu gửi đến từ LoRa ?",
              "output": null,
              "colour": "#505170",
              "tooltip": "",
              "helpUrl": ""
            }
          );
      }
    };

    Blockly.Python['yolobit_lora_check'] = function(block) {
        Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
        Blockly.Python.definitions_['import_machine'] = 'from yolobit_lorae32 import ebyteE32';
      var code = "e32.recvMessage(from_address, from_channel, useChecksum=True)['msg'] != None";
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };

