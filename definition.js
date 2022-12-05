Blockly.Blocks['yolobit_lora_create'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "start",
            "message0": "khởi tạo Lora E32 chân TX %1 chân RX %2 address %3 channel %4",
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
                "type": "field_number",
                "name": "ADDRESS",
                "value": 0
              },
              {
                "type": "field_number",
                "name": "CHANNEL",
                "value": 0
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#6bfab0",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.JavaScript['yolobit_lora_create'] = function(block) {
        var tx = block.getFieldValue('tx');
        var rx = block.getFieldValue('rx');
        var address = block.getFieldValue('address');
        var channel = block.getFieldValue('channel');
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n';
        return code;
    };

    Blockly.Blocks['yolobit_lora_send'] = {
        init: function() {
            this.jsonInit(
                {
                    "type": "yolobit_lora_send",
                    "message0": "gửi  %1 đến address %2 channel %3",
                    "args0": [
                      {
                        "type": "field_input",
                        "name": "message",
                        "text": "default"
                      },
                      {
                        "type": "field_number",
                        "name": "ADDRESS",
                        "value": 0
                      },
                      {
                        "type": "field_number",
                        "name": "CHANNEL",
                        "value": 0
                      }
                    ],
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": "#6bfab0",
                    "tooltip": "",
                    "helpUrl": ""
                  }
            );
                }
    };
    Blockly.Python['yolobit_lora_send'] = function(block) {
        var text_message = block.getFieldValue('message');
        var text_address = block.getFieldValue('address');
        var text_channel = block.getFieldValue('channel');
        // TODO: Assemble Python into code variable.
        var code = '...\n';
        return code;
    };

    Blockly.Blocks['yolobit_lora_receive'] = {
        init: function() {
            this.jsonInit(
                {
                    "type": "yolobit_lora_receive",
                    "message0": "hiện thông tin nhận được từ address %1 channel %2",
                    "args0": [
                        {
                            "type": "field_number",
                            "name": "ADDRESS",
                            "value": 0
                          },
                          {
                            "type": "field_number",
                            "name": "CHANNEL",
                            "value": 0
                          }
                    ],
                    "output": null,
                    "colour": "#6bfab0",
                    "tooltip": "",
                    "helpUrl": ""
                  }
            );
                }
    };

    Blockly.Python['yolobit_lora_receive'] = function(block) {
        var text_address = block.getFieldValue('address');
        var text_channel = block.getFieldValue('channel');
        // TODO: Assemble Python into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_NONE];
    };
