package com.jetbrains.kmpapp.components.popups

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import com.jetbrains.kmpapp.theme.KmpAppColors
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun ProductionSchedulePopup(onDismiss: () -> Unit) {
    Dialog(onDismissRequest = onDismiss) {
        Box(
            modifier = Modifier
                .width(800.dp)
                .height(600.dp)
                .background(
                    color = KmpAppColors.CardBackground,
                    shape = RoundedCornerShape(12.dp)
                )
        ) {
            Column(modifier = Modifier.fillMaxSize()) {
                // Header
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "PRODUCTION SCHEDULE",
                        style = KmpAppTypography.ButtonText.copy(color = KmpAppColors.TextPrimary)
                    )
                    Spacer(modifier = Modifier.weight(1f))
                    // Search Input (Simulated)
                    Box(
                        modifier = Modifier
                            .width(200.dp)
                            .background(
                                color = Color(0xFFF3F4F6),
                                shape = RoundedCornerShape(6.dp)
                            )
                            .padding(horizontal = 10.dp, vertical = 6.dp)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            // Icon placeholder
                            Box(
                                modifier = Modifier
                                    .width(14.dp)
                                    .height(14.dp)
                                    .background(Color.Gray, shape = RoundedCornerShape(7.dp))
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "ENTER PP/WO NUMBER",
                                fontSize = 10.sp,
                                color = KmpAppColors.TextSecondary
                            )
                        }
                    }
                }
                
                HorizontalDivider(thickness = 1.dp, color = Color(0xFFE5E7EB))
                
                // List
                LazyColumn(
                    modifier = Modifier
                        .weight(1f)
                        .padding(start = 12.dp, end = 12.dp, bottom = 8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    item { Spacer(modifier = Modifier.height(8.dp)) }
                    item {
                        ScheduleItem(
                            number = "1",
                            woNumber = "WO202511/000055",
                            qty = "Qty: 89,700",
                            time = "06:00 AM - 10:00 AM",
                            status = "ONGOING",
                            mainColor = KmpAppColors.PrimaryGreen,
                            statusColor = KmpAppColors.StatusOngoing,
                            textColor = KmpAppColors.TextPrimary,
                            statusTextColor = KmpAppColors.PrimaryGreen
                        )
                    }
                    item {
                        ScheduleItem(
                            number = "2",
                            woNumber = "WO202511/000056",
                            qty = "Qty: 45,000",
                            time = "10:00 AM - 02:00 PM",
                            status = "PENDING",
                            mainColor = Color(0xFFF9FAFB),
                            statusColor = Color.Transparent,
                            textColor = KmpAppColors.TextPrimary,
                            statusTextColor = KmpAppColors.TextSecondary,
                            numberBgColor = Color.Black,
                            numberTextColor = Color.White
                        )
                    }
                    item {
                        ScheduleItem(
                            number = "3",
                            woNumber = "WO202511/000057",
                            qty = "Qty: 12,000",
                            time = "ON HOLD",
                            status = "HOLD",
                            mainColor = KmpAppColors.StatusHold,
                            statusColor = KmpAppColors.AlertRed,
                            textColor = KmpAppColors.TextPrimary,
                            statusTextColor = Color.White,
                            numberBgColor = Color.Black,
                            numberTextColor = Color.White,
                            isHold = true
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun ScheduleItem(
    number: String,
    woNumber: String,
    qty: String,
    time: String,
    status: String,
    mainColor: Color,
    statusColor: Color,
    textColor: Color,
    statusTextColor: Color,
    numberBgColor: Color? = null,
    numberTextColor: Color? = null,
    isHold: Boolean = false
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(
                color = mainColor,
                shape = RoundedCornerShape(6.dp)
            )
            .padding(12.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            // Number Badge
            Box(
                modifier = Modifier
                    .width(24.dp)
                    .height(24.dp)
                    .background(
                        color = numberBgColor ?: statusColor,
                        shape = RoundedCornerShape(3.dp)
                    ),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = number,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold,
                    color = numberTextColor ?: statusTextColor
                )
            }
            
            Spacer(modifier = Modifier.width(10.dp))
            
            // Details
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = woNumber,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = textColor
                )
                Text(
                    text = qty,
                    fontSize = 9.sp,
                    color = KmpAppColors.TextSecondary
                )
                Text(
                    text = time,
                    fontSize = 9.sp,
                    color = if (isHold) KmpAppColors.AlertRed else KmpAppColors.TextSecondary
                )
            }
            
            // Status Badge
            if (statusColor != Color.Transparent) {
                Box(
                    modifier = Modifier
                        .background(
                            color = statusColor,
                            shape = RoundedCornerShape(3.dp)
                        )
                        .padding(horizontal = 8.dp, vertical = 4.dp)
                ) {
                    Text(
                        text = status,
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = statusTextColor
                    )
                }
            } else {
                Text(
                    text = status,
                    fontSize = 8.sp,
                    fontWeight = FontWeight.Bold,
                    color = statusTextColor
                )
            }
        }
    }
}
