package com.jetbrains.kmpapp.components.popups

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import com.jetbrains.kmpapp.theme.KmpAppColors

@Composable
fun UpdateQuantityPopup(onDismiss: () -> Unit) {
    Dialog(onDismissRequest = onDismiss) {
        Box(
            modifier = Modifier
                .width(350.dp)
                .shadow(elevation = 10.dp, shape = RoundedCornerShape(12.dp))
                .background(
                    color = Color.White,
                    shape = RoundedCornerShape(12.dp)
                )
                .padding(24.dp)
        ) {
            Column {
                Text(
                    text = "UPDATE QUANTITY",
                    modifier = Modifier.fillMaxWidth(),
                    textAlign = TextAlign.Center,
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.Black
                )
                Spacer(modifier = Modifier.height(16.dp))
                
                InputFields(label = "PRODUCED QUANTITY", initialValue = "1500")
                Spacer(modifier = Modifier.height(16.dp))
                
                InputFields(label = "DAMAGE QUANTITY", initialValue = "20", placeholder = "Enter Damage Quantity")
                Spacer(modifier = Modifier.height(16.dp))
                
                // Employee Picker (Simulated)
                Column {
                    Text(
                        text = "EMPLOYEE NAME",
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = KmpAppColors.TextSecondary
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                     Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .background(Color(0xFFF3F4F6), RoundedCornerShape(4.dp))
                            .padding(8.dp)
                    ) {
                        Text("John Doe", fontSize = 14.sp)
                    }
                }
                 Spacer(modifier = Modifier.height(12.dp))
                 
                // Buttons
                Row {
                    Button(
                        onClick = onDismiss,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Color(0xFFF3F4F6),
                            contentColor = Color.Black
                        ),
                        modifier = Modifier.weight(1f),
                        shape = RoundedCornerShape(4.dp)
                    ) {
                        Text("CANCEL", fontWeight = FontWeight.Bold)
                    }
                    Spacer(modifier = Modifier.width(12.dp))
                    Button(
                        onClick = onDismiss,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = KmpAppColors.PrimaryGreen,
                            contentColor = Color.Black
                        ),
                        modifier = Modifier.weight(1f),
                         shape = RoundedCornerShape(4.dp)
                    ) {
                         Text("SAVE", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }
    }
}

@Composable
fun InputFields(label: String, initialValue: String, placeholder: String = "") {
    Column {
        Text(
            text = label,
            fontSize = 10.sp,
            fontWeight = FontWeight.Bold,
            color = KmpAppColors.TextSecondary
        )
        Spacer(modifier = Modifier.height(4.dp))
        BasicTextField(
            value = initialValue,
            onValueChange = {},
            textStyle = TextStyle(fontSize = 16.sp, color = Color.Black),
            modifier = Modifier
                .fillMaxWidth()
                .background(Color(0xFFF3F4F6), RoundedCornerShape(4.dp))
                .padding(8.dp)
        )
    }
}
