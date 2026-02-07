package com.jetbrains.kmpapp.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jetbrains.kmpapp.theme.KmpAppColors
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun WorkOrderCard() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(
                color = KmpAppColors.PrimaryGreen,
                shape = RoundedCornerShape(8.dp)
            )
            .padding(horizontal = 16.dp, vertical = 12.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "WO202511/000055",
                    style = KmpAppTypography.CardTitle
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = "Product: 10411 - Packaging A",
                    style = KmpAppTypography.CardSubtitle
                )
            }
            
            Box(
                modifier = Modifier
                    .background(
                        color = KmpAppColors.StatusOngoing,
                        shape = RoundedCornerShape(4.dp)
                    )
                    .padding(horizontal = 12.dp, vertical = 6.dp)
            ) {
                Text(
                    text = "ONGOING",
                    style = KmpAppTypography.HeaderStyle.copy(fontSize = 10.sp)
                )
            }
        }
    }
}
